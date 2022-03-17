import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {currentUserSelector} from '../../store/selectors';
import {muteUserAudioThunk, muteUserVideoThunk} from '../../store/thunks';

export function useUserVideo({onMediaObtained}: UserVideoHooksOptions) {
  const dispatch = useDispatch();
  const videoRef = useRef<HTMLVideoElement>();
  const [noMedia, setNoMedia] = useState(false);
  const [initialised, setInitialised] = useState(false);
  const [menu, setMenu] = useState(null);
  const user = useSelector(currentUserSelector);

  useEffect(() => {
    // videoCall.on('media', ({stream, video, audio}) => {
    //   if (videoRef.current) {
    //     videoRef.current.srcObject = stream;
    //   }
    //   console.log(stream, video, audio)
    // });
  }, []);

  const muteAudio = () => {
    const muted = !user.audio;
    // videoCall.muteAudio(muted);
    dispatch(muteUserAudioThunk(muted));
  };

  const muteVideo = () => {
    const muted = !user.video;
    // videoCall.muteVideo(muted);
    dispatch(muteUserVideoThunk(muted));
  };

  const handleOpenMenuClick = (event: any) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenuClick = () => {
    setMenu(null);
  };

  return {
    videoRef,
    menu,
    initialised,
    user,
    noMedia,
    muteAudio,
    muteVideo,
    handleOpenMenuClick,
    handleCloseMenuClick
  }
}

export type UserVideoHooksOptions = {
  onMediaObtained?: (stream: MediaStream) => void;
  onMuteVideo?: (muted: boolean) => void;
  onMuteAudio?: (muted: boolean) => void;
};
