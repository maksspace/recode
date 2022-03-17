export let mediaStream: MediaStream;

export type UserMediaOptions = {
  video?: boolean;
  audio?: boolean;
}

export const getMediaStream = async (opts: UserMediaOptions = {
  video: true,
  audio: true
}) => {
  console.log(opts)
  return await navigator.mediaDevices.getUserMedia({
    video: opts.video ? {
      frameRate: 25,
    } : false,
    audio: opts.audio ? {
      noiseSuppression: true,
      echoCancellation: true
    } : true
  }).catch(e => {
    console.log(`Can not obtain user media: ${e.message}`);
    throw e;
  });
}
