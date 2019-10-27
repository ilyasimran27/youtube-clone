import React from 'react';
const VideoContent = ({ video, onVidSelect }) => {
    return (
        <div onClick={() => onVidSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} />
            <div>
                <div>
                    {video.snippet.title}
                </div>
            </div>

        </div>
    );
}
export default VideoContent;