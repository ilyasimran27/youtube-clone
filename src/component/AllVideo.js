import React from 'react';
import VideoContent from './VideoContent';
const AllVideo = ({ videos, onVidSelect }) => {
    const renderedList = videos.map((video) => {
         return <VideoContent key={video.id.videoId} onVidSelect={onVidSelect} video={video} />;
    });
    return (
        <>
            <div className="col-lg-4 bg-light pr-4">
                <div className="row ml-2 pr-2  pb-4">{renderedList}
                </div>
            </div>

        </>
    );
}
export default AllVideo;