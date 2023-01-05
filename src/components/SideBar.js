import React from "react";
import UserImage from "../assets/user-image.png";
import QuesImg from "../assets/questionimg.png";
import BgImg from "../assets/bg-img.png";
const questions = [
  {
    id: 1,
    question:
      "what moisturiserr should i use in winter tim? My skin is getting dry",
  },
  {
    id: 2,
    question:
      "what moisturiserr should i use in winter tim? My skin is getting dry",
  },
  {
    id: 3,
    question:
      "what moisturiserr should i use in winter tim? My skin is getting dry",
  },
  {
    id: 4,
    question:
      "what moisturiserr should i use in winter tim? My skin is getting dry",
  },
  {
    id: 4,
    question:
      "what moisturiserr should i use in winter tim? My skin is getting dry",
  },
];
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-bg-img">
          <img src={BgImg} alt="" />
        </div>
        <div className="sidebar-user-info">
          <div className="user-img">
            <img className="user-profile-img" src={UserImage} alt="" />
          </div>
          <div className="user-name">
            <h3>Dhairya Marwah</h3>
          </div>
          <div className="user-description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor
              sit amet consectetur adipisicing el Nulla, atque.
            </p>
          </div>
          <div className="view-btn">
            <button className="btn | primary-btn full-width-btn">
              View Profile
            </button>
          </div>
        </div>
      </div>
      <div className="sidebar-questions">
        <h3>Best questions for you.</h3>
        <div className="questions">
          {questions.map((question) => {
            return (
              <div className="question">
                <img className="user-profile-img" src={QuesImg} alt="" />
                <p>{question.question}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
