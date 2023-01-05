import React, { useRef, useEffect, useState } from "react";
import UserImage from "../../assets/user-image.png";
import Like from "../../assets/like.svg";
import Share from "../../assets/share.svg";
import Comment from "../../assets/comment.svg";
import Save from "../../assets/save.svg";
const data = [
  {
    id: 1,
    userName: "Dhairya Marwah",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    likes: 10,
    comments: 5,
    shares: 2,
    hashtags: [
      "#skin",
      "#winter",
      "#dry",
      "#skin",
      "#winter",
      "#dry",
      "#skin",
      "#winter",
      "#dry",
    ],
    date: "1 day ago",
    postImg:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    userName: "Vansh Patel",
    date: "2 day ago",
    content:
      "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    likes: 120,
    comments: 12,
    shares: 20,
    hashtags: ["#skin", "#winter", "#dry", "#skin", "#winter", "#dry"],
    postImg:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, []);
  // setPosts(data);
  console.log(posts[0]?.hashtags);
  return (
    <>
      <div className="home-page">
        {posts.map((post) => {
          return (
            <>
              <div className="home-page-posts">
                <div className="post-profile">
                  <div className="user-img">
                    <img className="user-profile-img" src={UserImage} alt="" />
                  </div>
                  <div className="post-user-name">
                    <h3>{post.userName}</h3>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="post-caption">
                  <p>{post.content}</p>
                </div>
                <div className="post-hashtag">
                  {post?.hashtags?.map((hashtag, index) => {
                    // <span>{hashtag.}</span>;
                    return <span key={index}>{hashtag} &nbsp;</span>;
                  })}
                </div>
                <div className="post-image">
                  <img src={post.postImg} alt="" />
                </div>
                <div className="like-counts">
                  <p> <img src={Like} alt="" /> {post.likes}+ likes</p>
                  <p> <img src={Comment} alt="" /> {post.comments}+ comments</p>
                  <p> <img src={Share} alt="" /> {post.shares}+ share</p>
                  <p> <img src={Save} alt="" /> Save</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
