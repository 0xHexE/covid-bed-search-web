// This script sets up the database to be used for this example application.
// Look at the code to see what is behind the magic
const faunadb = require("faunadb");
const q = faunadb.query;
const request = require("request");
const fs = require("fs");
const streamToPromise = require("stream-to-promise");
const fetch = require("node-fetch");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// In order to set up a database, we need an admin key, so let's ask the user for a key.
readline.question(`Please provide the FaunaDB admin key\n`, (adminKey) => {
  return fetch("https://graphql.fauna.com/import", {
    headers: {
      Authorization: `Bearer ${adminKey}`,
    },
    body: fs.readFileSync("./schema.graphql").toString(),
  })
    .then((docs) => {
      return docs.json();
    })
    .then((docs) => {
      console.log(docs);
      const client = new faunadb.Client({ secret: adminKey });
      return client
        .query(
          q.CreateRole({
            name: "GuestbookRole",
            privileges: [
              {
                resource: q.Collection("GuestbookEntry"),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Index("entries"),
                actions: { read: true },
              },
            ],
          })
        )
        .then((res) => {
          console.log(
            "2. Successfully created role to read and write guestbook entries"
          );
        })
        .catch((err) => {
          if (err.toString().includes("instance already exists")) {
            console.log("2. Role already exists.");
          } else {
            throw err;
          }
        });
    })
    .then(() => {
      const client = new faunadb.Client({ secret: adminKey });
      return client
        .query(
          q.CreateKey({
            role: q.Role("GuestbookRole"),
          })
        )
        .then((res) => {
          console.log("3. Created key to use in client");
          console.log(res.secret);
        });
    });
});
