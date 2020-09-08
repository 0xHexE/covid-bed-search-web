export default function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  setTimeout(() => {
    res.end(
      JSON.stringify({
        data: [
          {
            key: '1',
            name: 'John Brown',
            type: 'PVT',
            address: 'New York No. 1 Lake Park',
            lastUpdated: new Date(),
            contactNumber: ['8788339915'],
            location: [12, 123],
            total: 12,
            vacant: 123,
          },
          {
            key: '2',
            name: 'Jim Green',
            type: 'PVT',
            address: 'London No. 1 Lake Park',
            lastUpdated: new Date(),
            contactNumber: ['8788339915'],
            location: [12, 123],
            total: 12,
            vacant: 123,
          },
          {
            key: '3',
            name: 'Joe Black',
            type: 'PVT',
            address: 'Sidney No. 1 Lake Park',
            lastUpdated: new Date(),
            contactNumber: ['8788339915'],
            location: [12, 123],
            total: 12,
            vacant: 123,
          },
        ],
      })
    );
  }, 1000);
}