import React from "react";
import "./index.css";
import logo from "../Images/logo.jpg";
import background from "../Images/background.jpg";
import user from "../Images/user.jpg";
import { AiOutlineStar, AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { BiSolidDiamond } from "react-icons/bi";
import { MdVerified } from "react-icons/md";

export default function Index() {
  return (
    <>
      <header className="header">
        <div className="head-item-1">
          <img src={logo} className="logo" />
          <h5 className="title">STORIES</h5>
        </div>
        <div className="head-item-2">
          <button className="head-btn">Courses</button>
        </div>
      </header>
      <section className="background-holder">
        <img className="background-img" src={background} />
      </section>
      <section className="detailer-holder">
        <div>
          <img src={user} className="user" />
        </div>
        <div className="info">
          <h3>
            Anuj Gosalia
            <BiSolidDiamond className="dia" />
            <MdVerified className="veri" />
          </h3>
          <div className="followlist">
            <div>
              <span>6482</span>
              <article>Followers</article>
            </div>

            <div>
              <span>245</span>
              <article>Following</article>
            </div>
          </div>
        </div>
        <div className="details">
          <h5>Co-founder & CEO at Terribly Tiny Tales</h5>
          <a href="">http://www.instagram.com/anujgosalia</a>
          <div className="icons">
            <AiOutlineStar className="icon" />
            <AiOutlineLike className="icon" />
            <AiOutlineEye className="icon" />
            <BsFillArrowThroughHeartFill className="icon" />
          </div>
        </div>
      </section>
      <div className="tabs">
        <h3>134 Posts</h3>
      </div>
      <section className="posts">
        <div className="post">
          <h2>
            A Changing World Order{" "}
            <AiOutlineLike
              className="icon"
              style={{ float: "right", background: "orange" }}
            />
          </h2>
          <p>
            The World is changing at a feverish pace. Friends,colleages and
            everyone engaged in knowledge work are beginning to sense this,
            including ...
          </p>
          <div className="post-footer">
            <h6>
              <span style={{ color: "skyblue" }}>musing</span> by anugosalia
            </h6>
            <h6 className="time">August 2 • 2 min Read • 102 Views </h6>
          </div>
        </div>

        <div className="post">
          <h2>
            India v/s Australia{" "}
            <AiOutlineLike
              className="icon"
              style={{ float: "right", background: "orange" }}
            />
          </h2>
          <p>
            think about it - this cricket series was akin to therapy
            <br />
            <br />
            Laying our childhood trauma up top, working with it slowly and
            surely over two m...
          </p>
          <div className="post-footer">
            <h6>
              <span style={{ color: "skyblue" }}>thought</span> by anugosalia
            </h6>
            <h6 className="time">January 21 • 1 min Read • 156 Views </h6>
          </div>
        </div>

        <div className="post">
          <h2>
            Write to build{" "}
            <AiOutlineLike
              className="icon"
              style={{ float: "right", background: "orange" }}
            />
          </h2>
          <p>
            Writing into the first step to create:
            <br />
            <br />
            - stories
            <br />- products
            <br /> - companies
          </p>
          <div className="post-footer">
            <h6>
              <span style={{ color: "skyblue" }}>thought</span> by anugosalia
            </h6>
            <h6 className="time">November 18 • 1 mins Read • 228 Views </h6>
          </div>
        </div>
      </section>
    </>
  );
}
