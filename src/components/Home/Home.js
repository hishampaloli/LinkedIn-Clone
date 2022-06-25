import React from "react";
import "./Home.css";
import LeftCardForHome from "../HomeCards/LeftCardForHome";
import RightCardForHome from "../HomeCards/RightCardForHome";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WorkIcon from "@mui/icons-material/Work";
import FeedIcon from "@mui/icons-material/Feed";
import MiddleCardForHome from "../HomeCards/MiddleCardForHome";

function Home() {
  return (
    <div className="main">
      <div className="home flex justify-around">
        <div className="row1">
          <LeftCardForHome />

          <MiddleCardForHome />
        </div>
        <RightCardForHome />
      </div>
    </div>
  );
}

export default Home;
