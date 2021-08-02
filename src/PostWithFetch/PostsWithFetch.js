import React, {useState, useEffect} from 'react'
import styles from './PostsWithFetch.module.css';

function PostsWithFetch() {
  const [posts, setPosts] = useState( [] );

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://ec2-52-90-183-165.compute-1.amazonaws.com:8080/api/restaurants');
      // const response = await fetch('http://localhost:8080/api/users');
      const postsData = await response.json();
      console.log(postsData);
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

const usePosts = posts.map((post)=>{
  return <div className="container">
              <h3>{post.id}</h3>
              <h3>{post.username}</h3>
              <h3>{post.role}</h3>
              {/* <h4>{post.title}</h4> */}
              {/* <p className={styles['body']}>{post.body}</p> */}
            </div>
  })

  return (
    <>
      <h1>Fetch API With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className="container">
          {posts && usePosts}
      </div>
    </>
  );
}

export default PostsWithFetch;
