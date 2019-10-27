import React from 'react';
const VideoDescription = ({ video }) => {
    if (!video) {
        return <div>Loading videos....</div>
    }
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <>
            <div className="col-lg-8">
                <iframe title="video player" src={videoSource} style={{ height: 400 ,border:0}} className="col-lg-12 "></iframe>
                <div className="border-bottom mt-2">
                    <h4 className="h4">{video.snippet.title}</h4>
                    <p className="text-justify">{video.snippet.description}</p>
                </div>
            </div>


        </>
    )
}
export default VideoDescription;