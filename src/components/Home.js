import { useState, useEffect } from "react";
import Axios from "axios";
import BlogCard from "./BlogCard";



export const URL = "https://permission-api675.herokuapp.com";

const Blog = () => {
    const [posts, setPosts] = useState([]);

    //using axios to make api call and get required data
    useEffect(() => {
        Axios.get(URL)
            .then((res) => setPosts(res.data.getPosts))
            // .catch(
            //     console.log("failed to fetch data")
            // );
    }, []);

    return (
        <div>
            
            {posts.map((post) => {
                return (
                    <BlogCard key={post?.id} author={post?.author} title={post?.title} content={post?.content}/>
                    // <h1>{post.title}</h1>
                )
            })}
        </div >
    )
}

export default Blog