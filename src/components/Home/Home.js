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
import { getArticlesAPI, deleteArticleAPI } from "../../Actions/ArticleActions";
import DeleteIcon from '@mui/icons-material/Delete';
import ReactPlayer from "react-player";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState } from "react";

function Home() {

useEffect(() => {
 dispatch(getArticlesAPI());
}, [])


  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const profile = useSelector((state) => state.ProfileState.showProfile);
  const articles = useSelector((state) => state.ArticleState.articles);
  const [fade, setFade] = useState(false);

  const handleDelete = (e) => {
    dispatch(deleteArticleAPI(e));
    setFade(true)
    setTimeout(() => {
      setFade(false)
    }, 500);
  }

  console.log('article >>>', articles);

  return (
    <>
      {!user ? navigate("/") : null}
      <div className="main">
        <div className="home flex justify-around">
          <div className="row1">
            <LeftCardForHome />
            <div className="middlemain ">
              <MiddleCardForHome />
              {!articles ? <Box sx={{ display: 'flex',marginTop:'50px',marginLeft:'50%' }}>
  <CircularProgress />
</Box> :  (
  <>
  {articles.map(i => {
    return <div  className={fade ? "middlePosts flex flex-col items-start rounded-lg fade" : "middlePosts flex flex-col items-start rounded-lg"}>

<div className="post-top flex flex-row justify-between">
  <div className="pt-left">
    <img
      src={i.actor.image}
      alt=""
    />
  </div>
  <div className="pt-right">
    <h1>{i.actor.name}</h1>
    <small className="flex items-center">
      4h. <PublicIcon />
    </small>
  </div>
  
<DeleteIcon className="dlete"  onClick={(e) => handleDelete(i.id)}  />
</div>

<div className="post-title">
  <h1>
    {i.description}
  </h1>
</div>


<div className="post-img">
{i.video === '' ? <img
    src={i.sharedImg}
    alt=""
  />   :  <ReactPlayer width={"100%"} height={"300px"} url={i.video} /> }
 
</div>

<div className="post-bottom w-full py-1">
  <div
    className="pb-top flex justify-between text-xs  px-5 color-b py-3"
    style={{ color: "rgba(0, 0, 0, 0.621)" }}
  >
    <p>0 likes</p>
    <p>0 comments , 0 shares</p>
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
  })}
     
        </>
  )}
              
            </div>
          </div>
          <RightCardForHome />
        </div>
      </div>
    </>
  );
}

export default Home;
