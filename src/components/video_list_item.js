import React from 'react';



const VideoListItem = ({video}) => {
    //const video = props.video; but we used ({video}) GET USED TO THIS!
    console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoHeading = video.snippet.title

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoHeading}</div>
                </div>
            </div>
        </li>
    )
};


export default VideoListItem;