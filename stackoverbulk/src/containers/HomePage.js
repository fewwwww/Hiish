import React, { Component } from 'react';
import PostList from '../components/PostList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './HomePage.css';

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=> response.json())
      .then(posts => {this.setState({ posts: posts})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { posts, searchfield } = this.state;
    const filteredPosts = posts.filter(post =>{
      return post.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !posts.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>stackoverbulk.com</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <PostList posts={filteredPosts} />
          </Scroll>
        </div>
      );
  }
}

export default HomePage;