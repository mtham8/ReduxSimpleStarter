import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // props get passed into VideoList
  // const videos = props.videos;
  const videoItems = props.videos.map((video) => {
    // key allows you to iterate through the key(id)
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
