import React from 'react';

// Sec.2 lec. 29 14. the video list item now has access to onVideoSelect.
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
  // Sec.2 lec 26 - defining a new variable to call the videos we want off the props object
			   // - from video_list we are calling the property, video.
  // const video = props.video; the same thing can be said in es6 by putting {video} inside the object
  // where props is now.
  // Sec.2 lec. 29 15. In, onClick={() =>  onVideoSelect(video)}, the video is from inside VideoListItem
  return (
	  <li onClick={() =>  onVideoSelect(video)} className="list-group-item">
		<div className="video-list media">
		  <div className="media-left">
			<img className="media-object" src={imageUrl} />
		  </div>

		  <div className="media-body">
			<div className="media-heading">{video.snippet.title}</div>
		  </div>
		</div>	  	
	  </li>
	);
}

export default VideoListItem;