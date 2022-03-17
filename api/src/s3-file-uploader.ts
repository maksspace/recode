import { Application } from "express"
import * as AWS from "aws-sdk"
import { appConfig } from "./config"
import { Attachment } from "./domain"

AWS.config.update(appConfig.aws)

export function s3FileUploader(app: Application) {
  app.get("/s3/sign", (req, res) => {
    const { objectName, contentType } = req.query

    if (!objectName || !contentType) {
      res.status(400).json({
        error: true,
        message: "Invalid request properties"
      })
    }

    const attachment = new Attachment(
      objectName as string,
      "",
      contentType as string,
      0
    )

    const params = {
      Bucket: appConfig.uploadsBucketName,
      Key: attachment.id,
      Expires: 60,
      ContentType: attachment.mimeType,
      ACL: "public-read"
    }

    const s3 = new AWS.S3()
    s3.getSignedUrl("putObject", params, (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).json({
          error: true,
          message: "Error to upload file to S3 bucket"
        })
      }

      res.json({
        signedUrl: data,
        publicUrl: `${appConfig.uploadsBucketURL}/${attachment.id}`,
        fileName: attachment.name,
        fileId: attachment.id
      })
    })
  })
}
