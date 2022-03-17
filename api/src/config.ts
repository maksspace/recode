import dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  aws: {
    region: process.env["AWS_REGION"],
    accessKeyId: process.env["AWS_SECRET_ID"],
    secretAccessKey: process.env["AWS_SECRET_KEY"],
  },
  uploadsBucketURL: process.env['S3_UPLOADS_URL'],
  uploadsBucketName: process.env['S3_BUCKET_NAME']
};