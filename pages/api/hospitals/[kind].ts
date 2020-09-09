import faunadb, { query as q } from 'faunadb';

export interface FaunaResponse<T> {
  ts: number;
  data: T;
}

export interface Hospital {
  key: string;
  name: string;
  type: string;
  address: string;
  lastUpdated: string;
  contactNumber: number[];
  location: number[];
  total: number;
  vacant: number;
}

export default async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const adminClient = new faunadb.Client({
    secret: process.env.FAUNA_DB_ACCESS_KEY,
  });

  // Map(
  //     Paginate(
  //         Match(Index("all_hospitals"))
  //     ),
  //     Lambda("X", Get(Var("X")))
  // )

  const result = await adminClient.query<{ data: FaunaResponse<Hospital[]>[] }>(
    q.Map(
      // iterate each item in result
      q.Paginate(
        // make paginatable
        q.Match(
          // query index
          q.Index('all_hospitals') // specify source
        )
      ),
      (ref) => q.Get(ref) // lookup each result by its reference
    )
  );

  console.log(result.data);

  res.end(
    JSON.stringify({
      statistics: {
        total: Math.floor(Math.random() * 200),
        occupied: Math.floor(Math.random() * 200),
        vacant: Math.floor(Math.random() * 200),
      },
      data: result.data.map((res) => ({ _id: res.ts, ...res.data })),
    })
  );
}
