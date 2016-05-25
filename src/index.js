// react creates multiple components
// a component is a js function that produces html
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// when you're importing your own file -- you have to provide a path reference

const API_KEY = 'AIzaSyB4m1NCtYAZVtzVLemhbYf6KNwNNlVLAzg';

// YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
//   console.log(data);
// })

// create a new component. This component should produce some HTML
// const app = function () {}
  // const is ES6 syntax -- declares a variable with a final value -- not going to reassign app
class App extends Component {
  // when you enter a new search, conduct new search and set the state
  // props can be used as this.props in class base components
  constructor(props) {
    super(props);

    // component-level state
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards')

  }

  // callback function to search for videos
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce( (term) => {this.videoSearch(term) }, 300);
    // debounce takes in a function and runs the function every 300 seconds
    // throttle user search

    return (
      <div>
        Hello!
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
};

// take this component's generated html and put it on
// the page (in the DOM)
// when you're creating a component, you're creating a class of a component
// you want to pass in an instance of a component in .render()
// wrap your component in jsx tags when render
ReactDOM.render(<App />, document.querySelector('.container'));

// a component is a function/object that returns HTML

// downwards data flow: only the most parent component should be responsible for
// fetching data

// things to think about when writing a component:
// 1. Do I expect this component to maintain any type of state?

// difference between class and function
// class is used when you want the concept of state
// functional is used when you have a simple component that takes in properties
// and returns static jsx

// class --> component --> this.state
// when you change the state, the component rerenders

// import statements --> give relative path for own files









