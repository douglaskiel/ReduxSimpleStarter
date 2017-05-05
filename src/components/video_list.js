import React from 'react';
import VideoListItem from './video_list_item';

// - props is a new argument to the function called VideoList
// - if this were to ever become a classbased component the 
//   {props.videos.length} would have to become => {this.props.videos.length}
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
  	return (
      <VideoListItem 
      // Sec.2 lec. 29 13. a. This is how the selected video moves from the App to the video list.
      // Sec.2 lec. 29 13. b. onVideoSelect is moved into the video list property taking this prop.
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    ); 
  });      // ^^ Sec.2 Lec. 25 3. when looking the items that will make the videos distinct
           //    search within the Netword for the "etag," which will give you the id you need
// Sec.2 Lec. 25 1. in this step we are creating a "key" that will make an ID to recognize the video
// Sec.2 Lec. 25 2. to find the id-in Dev-tools click on "Network," then look under "all," and then
				//  click and open "search?-part=snippet," and click on "Preview," you can then find
				//  the id for each video.

  // after videoItems, props.videos.map == an array for reiterating your videos

	// "const videos = props.videos" would be an array of videos if placed there

	// to find specific items within loop over the props.videos fo find them

// var array = [1, 2, 3];
// then you with out .map would have to apply many different for loops which can become tedious
// but: array.map creates a function reiterate like a for loop
// function map() { [native code] }
// array.map(function(number) {return number * 2});
// [2, 4, 6]  returns from this simple mapping function


  return (
  	<ul className="col-md-4 list-group">
  	  {videoItems}
  	</ul>
  ); // Within the items it's like in a library asking for an book without an ID for the book.
};
// {videoItems} points to the array from .map

export default VideoList;