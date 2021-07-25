import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./styles.css";

const url = "https://jsonplaceholder.typicode.com/posts";

class App extends React.Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    let posts = [];
    const result = await fetch(url);
    posts = await result.json();

    this.setState({ posts });
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="Posts">
        <header>
          <h1 className="fake-logo">Lenta</h1>
        </header>
        <div className="layout">
          <h3>Blog Posts</h3>
          {posts.map((posts) => (
            <div className="card" key={posts}>
              <h4>Post Number one</h4>
              <p>dataSource = {posts}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
