import React from "react";
import "./Home.css";
import LeftCardForHome from "../HomeCards/LeftCardForHome";
import RightCardForHome from "../HomeCards/RightCardForHome";
import PublicIcon from "@mui/icons-material/Public";
import MiddleCardForHome from "../HomeCards/MiddleCardForHome";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";

function Home() {
  return (
    <div className="main">
      <div className="home flex justify-around">
        <div className="row1">
          <LeftCardForHome />
          <div className="middlemain ">
            <MiddleCardForHome />
            <div className="middlePosts flex flex-col items-start rounded-lg">
              <div className="post-top flex flex-row justify-between">
                <div className="pt-left">
                  <img
                    src="https://media-exp2.licdn.com/dms/image/C5603AQH9Fjs8i_oRuQ/profile-displayphoto-shrink_100_100/0/1643992170235?e=1661385600&v=beta&t=nsW4uIU-VeKsdTh6fCc0Mx0OwEAXgWG9xvA70iaeFkI"
                    alt=""
                  />
                </div>
                <div className="pt-right">
                  <h1>Hisham Paloli.</h1>
                  <p>Mern stack developer</p>
                  <small className="flex items-center">
                    4h. <PublicIcon />
                  </small>
                </div>
              </div>

              <div className="post-title">
                <h1>
                  I’m happy to share that I’m building a LinkedIn clone using
                  react!
                </h1>
              </div>

              <div className="post-img">
                <img
                  src="https://media-exp2.licdn.com/dms/image/C4D22AQEy6URI0ewo5A/feedshare-shrink_800/0/1655240621813?e=1658966400&v=beta&t=JJFoGPE2S7g1t2lFQ0Z7e9fijSlupi5wjIuU8F2MZ6E"
                  alt=""
                />
              </div>

              <div className="post-bottom w-full py-1">
                <div
                  className="pb-top flex justify-between text-xs  px-5 color-b py-3"
                  style={{ color: "rgba(0, 0, 0, 0.621)" }}
                >
                  <p>Nidhin M and 200 others</p>
                  <p>15 comments , 10 shares</p>
                </div>

                <div
                  className="pb-bottom flex justify-between p-5"
                  style={{ color: "rgba(0, 0, 0, 0.621)" }}
                >
                  <li className="post-icon flex justify-center">
                    <ThumbUpOutlinedIcon />
                  </li>
                  <li className="post-icon flex justify-center">
                    {" "}
                    <InsertCommentOutlinedIcon />
                  </li>
                  <li className="post-icon flex justify-center">
                    <ShareOutlinedIcon />
                  </li>
                  <li className="post-icon flex justify-center">
                    <TelegramIcon />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightCardForHome />
      </div>
    </div>
  );
}

export default Home;
