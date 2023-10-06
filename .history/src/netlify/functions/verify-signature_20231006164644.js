import { checkSignature } from '@meshsdk/core'

export default async function handler(req, res) {
  
  res.status(200).json({ result })
}

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
