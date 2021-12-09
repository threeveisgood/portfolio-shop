import nextConnect from "next-connect";
import multer from "multer";
import dayjs from "dayjs";
import AWS from "aws-sdk";

const multerS3 = require('multer-s3')

const app = nextConnect({
  onError(error: any, req: any, res: any) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: any, res: any) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.BUCKET_NAME,
    key(req: any, file: any, cb: any) {
      const nowDate = dayjs(Date.now()).format("YYMMDDHHMM");
      cb(null, `original/${nowDate}_${file.originalname}`);
    },
  })
});

app.post(upload.array("file"), function (req, res) {
  return res.json(req.files.map((v: any) => v.location));  
});

export default app;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// import aws from 'aws-sdk'
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   aws.config.update({
//       accessKeyId: process.env.ACCESS_KEY,
//       secretAccessKey: process.env.SECRET_KEY,
//       region: process.env.REGION,
//       signatureVersion: 'v4'
//   })

//   const s3 = new aws.S3()
//   const post = await s3.createPresignedPost({
//       Bucket: process.env.BUCKET_NAME,
//       Fields: {
//           key: req.query.file,
//       },
//       Expires: 60,
//       Conditions: [
//         ['content-length-range', 0, 104857600]
//       ]
//   })

//   res.status(200).json(post)
// }
