import VideoPlayer from 'react-native-video-controls';
import React from 'react';

const Video = ({onClose}) => {
  return (
    <VideoPlayer
      onBack={() => onClose()}
      onEnd={() => onClose()}
      fullscreenOrientation="all"
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    />
  );
};
export default Video;
