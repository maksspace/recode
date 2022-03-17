import axios from "axios";
import {config} from "../../../../../config";

type SignedURL = {
  fileKey: string;
  fileName: string;
  publicUrl: string;
  signedUrl: string;
}

export function getSignedURL(file: File): Promise<SignedURL> {
  const url = `${config.apiHost}/s3/sign?objectName=${file.name}&contentType=${file.type}`;
  return axios.get(url).then(i => i.data);
}

export function uploadSignedFile(signedUrl: string, file: File) {
  return axios({
    method: 'PUT',
    url: signedUrl,
    headers: {
      'x-amz-acl': 'public-read',
      'content-disposition': `inline; filename="${file.name}"`,
      "Content-Type": file.type
    },
    data: file
  })
}

export async function uploadFile(file: File) {
  try {
    const signed = await getSignedURL(file);
    await uploadSignedFile(signed.signedUrl, file);
    return {
      name: signed.fileName,
      url: signed.publicUrl,
      mimeType: file.type || 'application/octet-stream',
      size: file.size
    }
  } catch (e) {
    console.log(e);
  }
}

export async function uploadFiles(files: File[]) {
  const promises = files.map(file => uploadFile(file));
  return await Promise.all(promises);
}
