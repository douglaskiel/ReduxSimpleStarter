import React, { Component } from 'react';

class SearchBar extends Component {
	// only function that is called automatically 
	// whenever a new instance of the class is created
  constructor(props) {
  	// super calls the parent method
  	super(props);

  	// state is a plain js object that is used to record or react to user events
  	this.state = {term: ''};
  }   
  /* the input tells the state to change the rendering of the DOM*/
  render() {
    return ( 
      <div className="search-bar">        
        <input 
        value={this.state.term}
        // whenever onChange is ever called it will then call to onInputChange
        onChange={event => this.onInputChange(event.target.value)} />
      </div>  
    );    	
  }

  onInputChange (term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;