import React from 'react';

// Sec.2 lec.27 3. the {video} is taking the place of (props) as an es6 
// design to define the properties used
// Sec.2 lec.27 4. when you want to embed or search for a youtube video ({video})
// you only need the id, so to grab them
// Sec.2 lec.27 5. calling videoId and youtube.com/embed/ 
// is all we need to have the video player show up
// Sec.2 lec.27 6. es6 allows us to jam a javascript string within the url string
// points to const url changing ('' + videoId; to `/${videoId}`)
// Sec.2 lec. 28 2. ({video}) is calling 'undefined' from index.js {this.state.video[0]}
// that is making the "Cannot read property 'id' of undefined" error in console 
// without "Loading..." condition.
const VideoDetail = ({video}) => {
	// Sec.2 lec. 29 1. a. This is checking for the case of a video property by a conditional.
	// Sec.2 lec. 29 1. b. It only takes three lines of code to actually get a video to render.
	if (!video) {
		return <div>Loading...</div>
		// Sec.2 lec. 29 2. Loading... = ajax spinner
		// Sec.2 lec. 29 7. So now with the selectedVideo being set to null
		// it is always going to be set on Loading...
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div id="video" className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};  // Sec.2 lec.27 1. embed-responsive is making the perameters for the video shown
// Sec.2 lec.27 2. the iframe is what will be displaying the video called

export default VideoDetail;