import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  body: string;
}

export const Post = ()=> {
  const { id } = useParams();

  const [post, setPost] = useState<Post>();


  useEffect(() => {
    const fetchPosts = async() => {
      await axios.get(`${process.env.VITE_POST_URL!}/posts?id=${id}`)
      .then((res) => {
        setPost(res.data);
      })
    } 
    fetchPosts()
  }, [id])


  return(
    <>
      <h1 data-testid="post-title">{post?.title}</h1>
    </>
  )
}