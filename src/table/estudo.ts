import AWS from 'aws-sdk';

AWS.config.update({region: 'local'});

const db = new AWS.DynamoDB({ endpoint: 'http://localhost:7000/shell' });

const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S'
    },
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH'
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'estudo',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// db.createTable(params, function(err, data) {
//   if (err) {
//     console.log("Error: Table already created");
//   } else {
//     console.log("Table Created", data);
//   }
// });

// ddb.deleteTable({ TableName: 'estudo' }, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Table Deleted", data);
//   }
// });

const data = {
  TableName: 'estudo',
  Item: {
    id : {S: '14e81a8a-489a-4d37-aef3-feb488b0b5fd'},
    name : {S: 'teste name'},
    description : {S: 'teste description'},
    createdAt : {S: '08-01-23 04:37:22'},
  }
};

db.putItem(data, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
