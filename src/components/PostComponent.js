import React from "react";
import UserImage from "../assets/user-image.png";
import GalleryImage from "../assets/gallery.svg";
const PostComponent = () => {
  return (
    <div className="post-component">
      <div className="user-profile">
        <img className="user-profile-img" src={UserImage} alt="" />
      </div>
      <div className="upload-section">
        <div className="question-input">
          <input type="text" placeholder="Ask questions.." />
        </div>
        <div className="upload-image">
          <p>
            {" "}
            <img src={GalleryImage} alt="" /> Upload photo
          </p>
          <div className="btns">
            <button className="btn | secondary-btn">Cancel</button>
            <button className="btn | primary-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
