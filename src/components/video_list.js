import React, { Component } from 'react';
import VideoListItem from './video_list_item';

//maybe change to class based
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        video={video} 
        key={video.etag}  />
    })
    
    return (
        <ul className="col-md-4 list-group listofitems">
            {videoItems}
        </ul>
    )
};


export default VideoList;