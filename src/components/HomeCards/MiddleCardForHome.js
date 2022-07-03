import React from "react";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WorkIcon from "@mui/icons-material/Work";
import FeedIcon from "@mui/icons-material/Feed";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../Actions/showAction";
import MiddlePostModal from "./MiddlePostModal";

function MiddleCardForHome() {

  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.showState.show)
console.log('>>>>',modal);

  const handleShow = () => {
    dispatch(setModal(true))
  }

  return (
    <div className="middle flex flex-col items-center rounded-lg">
      <div className="middle-top flex items-center justify-between">
        <div className="logo">
          <img
            src={user ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDy7e81HWRTCOnuK5H8X-5YmiQqslGdanA&usqp=CAU'}
            alt=""
          />
        </div>

        <button onClick={handleShow}>Ask your network for advice</button>
      </div>
      <div className="middle-bottom w-full list-none flex items-center justify-around">
        <li className="flex items-center">
          <PhotoSizeSelectActualIcon
            style={{ color: "rgb(1, 213, 255)", marginRight: "5px" }}
          />{" "}
          Photo
        </li>
        <li className="flex items-center">
          <VideoLibraryIcon
            style={{ color: "rgba(79, 255, 73, 0.808)", marginRight: "5px" }}
          />
          Video
        </li>
        <li className="flex items-center">
          <WorkIcon
            style={{ color: " rgba(224, 85, 255, 0.808)", marginRight: "5px" }}
          />
          Job
        </li>
        <li className="flex items-center">
          <FeedIcon
            style={{ color: "  rgba(255, 187, 85, 0.808)", marginRight: "5px" }}
          />
          Article
        </li>
      </div>
     
      {modal &&  < MiddlePostModal /> }
    </div>
  );
}

export default MiddleCardForHome;
