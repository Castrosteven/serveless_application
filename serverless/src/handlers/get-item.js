const tableName = process.env.SAMPLE_TABLE;

const dynamodb = require("aws-sdk/clients/dynamodb");
const docClient = new dynamodb.DocumentClient({ apiVersion: "2012-08-10" });

exports.getItemHandler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(`MUST BE A GET: ${event.httpMethod}`);
  }
  console.info("received:", event);

  var params = {
    TableName: tableName,
    Key: {
      id: event.pathParameters.id,
    },
  };

  const data = await docClient.get(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(data.Item),
  };

  return response;
};
