// Adding the component aspect to the React import to extend from the component.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// YTSearch is like a function, so to call the info from the api we need
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyAnb_qpXqMjqDhapSYdu4CKBVpeQOg_WBw";

// TODO: change function based component to class based component
	// From: const App = {} \\ To: class App extends Component {}
//  Create a new component. This component should produce 
// some html
class App extends Component {
  constructor(props) {
  	super(props);

  	// the video detail need to worry about the video 
  	// title, url and description of the video 

  	// This comes through props which is already being called here
  	// Sec.2 lec. 29 3. The video selector is going to be created within 
  	// the component state of "App" component.
  	// Sec.2 lec. 29 5. Here we are to pass another initialzer to the state.
  	this.state = { 
  		videos: [],
  		selectedVideo: null
  		// Sec.2 lec. 29 6. this selectedVideo now needs to be passed into the videoDetail
  	};
  	// Sec.2 lec. 31 2. We are taking the initial video search outside so that we can 
  	// search for any video we like within the youtube search, and keep the original setup.
  	this.videoSearch('Fireflight');
	}
  	
// Sec.2 lec. 31 1. a. placing the function that we have inside the videoSearch
// Sec.2 lec. 31 3. searching function is now within the searching method
// Sec.2 lec. 31 1. b. When term is called from SearchBar in the render func 
// it pops up here where term is called in videoSearch from youtube.
 videoSearch (term) {
 	// this is a function calling an object from the youtube api_key
	// this follows the jQuery "get function"
	// Sec.2 lec. 29 9. The whole of the following is grabbing the list of videos
	YTSearch({key: API_KEY, term: term}, (videos) => {
	  this.setState({ 
	  	// Sec.2 lec. 29 10. here we are passing them to this.state.videos and 
	  		videos: videos,
	  		// [0] is calling the first video to be ready for playing.
	  		selectedVideo: videos[0]
	  	}); // Sec. 2 lec. 21 1. no longer just showing the data in the console, 
	  							 // but to look for the specific info to render videos use
	  // this.setState({ videos: videos }); but it also renders within es6 by just calling the 
	  // parameter (videos) from "videos" within "this.setState({ videos });" or visa versa
	  // Sec.2 lec. 29 7. Now to pass over the null by \selectedVideo; null\, we are going back to the 
	  // long form.
	  // Sec.2 lec. 29 8. So now the first video within the array is called in the YTSearch
	  // instead of the videoDetails "this.state".
    }); 
 	}

// Sec.2 lec. 28 adding anything within the render function is going to call that item to the page
// Sec.2 lec. 28 1. To keep the render func from passing "undefined" we will pass a condition.
// Sec.2 lec. 29 4. a. Within this.state.videos we are going to pass our selector = .selectedVideo
// 									b. Then we'll pass a callback within VideoList
// 									c. and then passing that into videoListItem
// 									d. So when the video is selected the callback will be passed from VideoListItem

// Sec.2 lec. 29 11. Next is a function that is going to update App State passing to video_list and 
// finally to video_list_item.
// Sec.2 lec. 29 12. Now the selected video is being directly passed onto VideoList by onVideoSelect.
  render() {
    return (
	  <div>
	    <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
	    <VideoDetail video={this.state.selectedVideo} />
	    <VideoList 
	    	onVideoSelect={selectedVideo => this.setState({selectedVideo})}
	    	videos={this.state.videos} />
	  </div>
    );
  }
}
// Under SearchBar we are passing the "prop," videos, into the child component VideoList.

// Take this component's generated HTML and put it 
// on the page (in the DOM)
							// This code is what is calling 
							// container from index.html
ReactDOM.render(<App />, document.querySelector('.container'));
