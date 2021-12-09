import nextConnect from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next'

const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: 'v4'
})

const s3 = new aws.S3()

const upload = multer({
     storage: multerS3({
         s3: s3,
         bucket: process.env.BUCKET_NAME,
         metadata: function (req: any, file: any, cb: any) {
            cb(null, {fieldName: file.fieldname})
         },
         key: function (req: any, file: any, cb: any) {
            cb(null, Date.now().toString())
          }
     })
})

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('uploadedImages'));

apiRoute.post((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};