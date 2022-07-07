import React, { useEffect } from "react";
import "./Home.css";
import LeftCardForHome from "../HomeCards/LeftCardForHome";
import RightCardForHome from "../HomeCards/RightCardForHome";
import PublicIcon from "@mui/icons-material/Public";
import { useNavigate } from "react-router-dom";
import MiddleCardForHome from "../HomeCards/MiddleCardForHome";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProfileAPI } from "../../Actions/profileAction";

function Home() {



  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const profile = useSelector((state) => state.ProfileState.showProfile);


  return (
    <>
      {!user ? navigate("/") : null}
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
                      src={
              profile[0]
                ? profile[0].sharedImg : user.photoURL ? user.photoURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDy7e81HWRTCOnuK5H8X-5YmiQqslGdanA&usqp=CAU"
            }
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
    </>
  );
}

export default Home;
