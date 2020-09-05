import React, { Component } from 'react'
import JSONPretty from 'react-json-pretty';
import { Post } from './Post.js'

const URL = 'https://jsonplaceholder.typicode.com/posts'

class Fetch extends React.Component {
  state = {
    posts: []
  }

  fetchPosts = async () => {
    let response = await fetch(URL)
    let data = await response.json()
    // extract relevant data and save into new variable
    await this.setState({ posts: data })
  }

  componentDidMount = () => {
    this.fetchPosts()
  }

  render() {
    return (
      this.state.posts.map((post) =>
        <Post key={post.id}
              title={post.title}
              body={post.body}
        />
      )
    )
  }
}

export default Fetch

//<div>{JSON.stringify(this.state.props)}</div>
