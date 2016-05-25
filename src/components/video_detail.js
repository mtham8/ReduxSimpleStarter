import React from 'react';

const VideoDetail = ({video}) => {
  // if the video is not loaded yet, set loading..
  if (!video) {
    return <div> Loading... </div>;
  }

  const videoId = video.id.videoId;
  // ES6: template strings -- use backticks
  const url = `http://www.youtube.com/v/${videoId}?version=3&enablejsapi=1`;
  // const url = ${videoId}

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
