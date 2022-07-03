import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../Actions/userActions";
import "./Login.css";
import img1 from "./img/logo.png";
import img2 from "./img/home-img.svg";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);
  console.log(">>>.", user);

  return (
    <div class="container">
      {user && navigate("/home")}
      <nav>
        <div class="logo">
          <img src={img1} alt="" />
        </div>

        <ul class="nav-ul">
          <li class="ico">
            <i class="fa-solid fa-compass"></i>Discover
          </li>
          <li class="ico">
            <i class="fa-solid fa-user-group"></i>People
          </li>
          <li class="ico">
            <i class="fa-solid fa-laptop-file"></i>Learning
          </li>
          <li class="ico">
            <i class="fa-solid fa-briefcase"></i>Jobs
          </li>
          <li class="join">Join now</li>
          <li>
            <button onClick={() => dispatch(signInWithGoogle())}>
              Sign in
            </button>
          </li>
        </ul>
      </nav>

      <div class="smallNav">
        <div class="logo">
          <img src="img/logo.png" alt="" />
        </div>

        <div class="icon ">
          <i class="fa-solid fa-mound"></i>
          <div class="line1 "></div>
        </div>
      </div>

      <div class="min-show ">
        <ul class="nav-ul">
          <li class="ico">
            <i class="fa-solid fa-compass"></i>Discover
          </li>
          <li class="ico">
            <i class="fa-solid fa-user-group"></i>People
          </li>
          <li class="ico">
            <i class="fa-solid fa-laptop-file"></i>Learning
          </li>
          <li class="ico">
            <i class="fa-solid fa-briefcase"></i>Jobs
          </li>
          <li class="join">Join now</li>
          <li>
            <button onClick={() => dispatch(signInWithGoogle())}>
              Sign in
            </button>
          </li>
        </ul>
      </div>

      <div class="landing">
        <div class="left">
          <h1>Welcome to your professional community</h1>

          <input type="text" placeholder="Email or phone number" />
          <input type="text" placeholder="Password" />
          <label>Forgot password?</label>

          <button class="sign-in">Sign in</button>

          <div class="line">
            <div class="line-1"></div>
            <div class="or">or</div>
            <div class="line-2"></div>
          </div>

          <button class="google" onClick={() => dispatch(signInWithGoogle())}>
            Sign in with Google
          </button>
        </div>

        <div class="right">
          <img src={img2} alt="" />
        </div>
      </div>

      <section class="section-1">
        <div class="left">
          <h1>Explore topics you are interested in</h1>
        </div>

        <div class="right">
          <h3>CONTENT TOPICS</h3>
          <div class="btn-div">
            <button class="nop">See All Topics</button>
            <button>Science and Environment</button>
            <button>Marketing and Advertising</button>
            <button>Sales and Retail</button>
            <button>technology</button>
            <button>Finance and Economy</button>
            <button>health</button>
            <button>Business and Management</button>
          </div>

          <button>
            Show more <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </section>

      <section class="section-2">
        <div class="left">
          <h1>Find the right job or internship for you</h1>
        </div>

        <div class="right">
          <h3>SUGGESTED SEARCHES</h3>
          <div class="btn-div">
            <button class="nop">See All Topics</button>
            <button>Engineering</button>
            <button>Business Development</button>
            <button>Finance</button>
            <button>Administrative Assistant</button>
            <button>Retail Associate</button>
            <button>Information Technology</button>
            <button>Operations</button>
          </div>

          <button>
            Show more <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </section>

      <section class="section-3">
        <div class="left">
          <h1>Post your job for millions of people to see</h1>
        </div>

        <button>Post a job</button>
      </section>

      <section class="section-4">
        <div class="main-box" id="main-box">
          <div class="box">
            <div class="left">
              <h1 class="h1">Let the right people know you’re open to work</h1>
              <h1>
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities.
              </h1>
            </div>

            <div class="right">
              <img src="img/features-img.png" alt="" />
            </div>
          </div>

          <div class="box1">
            <div class="left">
              <h1 class="h1">
                Conversations today could lead to opportunity tomorrow
              </h1>
              <h1>
                Sending messages to people you know is a great way to strengthen
                relationships as you take the next step in your career.
              </h1>
            </div>

            <div class="right">
              <img
                src="https://static-exp1.licdn.com/sc/h/2r8kd5zqpi905lkzsshdlvvn5"
                alt=""
              />
            </div>
          </div>

          <div class="box2 ">
            <div class="left">
              <h1 class="h1">Stay up to date on your industry</h1>
              <h1>
                From live videos, to stories, to newsletters and more, LinkedIn
                is full of ways to stay up to date on the latest discussions in
                your industry.
              </h1>
            </div>

            <div class="right">
              <img
                src="https://static-exp1.licdn.com/sc/h/ann24vsq7r0ux3vipqa1n90gg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="coursel">
          <button id="prev">
            <i class="fa-solid fa-angle-left"></i>Prev
          </button>
          <button id="next">
            Next<i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </section>

      <section class="section-5">
        <div class="left">
          <img
            src="https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj"
            alt=""
          />
          <h1>Connect with people who can help</h1>
          <button>Find people you know</button>
        </div>

        <div class="right">
          <img
            src="https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv"
            alt=""
          />
          <h1>Learn the skills you need to succeed</h1>
          <button>
            Choose the topic you need to learn
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </section>

      <section class="section-6">
        <div class="img">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/IlYUUN8rL_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="background">
          <h1>In it to chase my dream</h1>
        </div>
      </section>

      <section class="section-7">
        <h1>Join your colleagues, classmates, and friends on LinkedIn.</h1>
        <button>Get started</button>
        <div class="img">
          <img src="img/cta-bg.svg" alt="" />
        </div>
      </section>

      <footer>
        <div class="logo">
          <img src="img/logo.png" alt="" />
        </div>

        <div class="ul-1">
          <ul>
            <h3>General</h3>
            <li>Sign Up</li>
            <li>Help Center</li>
            <li>About</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div class="ul-2">
          <ul>
            <h3>Browse LinkedIn</h3>
            <li>Jobs</li>
            <li>Salary</li>
            <li>Mobile</li>
            <li>Services</li>
            <li>Products</li>
          </ul>
        </div>

        <div class="ul-3">
          <ul>
            <h3>Business Solutions</h3>
            <li>Talent</li>
            <li>Marketing</li>
            <li>Sales</li>
            <li>Learning</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div class="ul-4">
          <ul>
            <h3>Members</h3>
            <li>Jobs</li>
            <li>Companies</li>
            <li>Featured</li>
            <li>Learning</li>
            <li>Posts</li>
            <li>Careers</li>
            <li>Marketing</li>
            <li>Sales</li>
            <li>Learning</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user
//   };
// };

export default Login;
