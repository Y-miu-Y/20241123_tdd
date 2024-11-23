import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  body: string;
} 

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async() => {
      await axios.get(`${process.env.VITE_POST_URL!}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
    } 
    fetchPosts()
  }, [])
  


  return (
    <>
      <h1 data-testid="blog-name">JSON Placeholder Blog</h1>
      <div>
        {posts.map((post)=>
          <div key={post.id}>
            <h1 data-testid="post-title" onClick={() => navigate(`/posts/${post.id}`)}>{post.title}</h1>
            <p data-testid="post-body">{post.body.length <= 10 ? post.body : post.body.slice(0, 10) + '...' }</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;