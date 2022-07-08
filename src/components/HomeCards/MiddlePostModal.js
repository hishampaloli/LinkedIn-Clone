import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import PublicIcon from "@mui/icons-material/Public";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../Actions/showAction";
import ReactPlayer from "react-player";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChatIcon from "@mui/icons-material/Chat";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import firebase from "firebase/compat/app";
import { postArticle } from "../../Actions/ArticleActions";

function MiddlePostModal() {
  const user = useSelector((state) => state.userState.user);
  const modal = useSelector((state) => state.showState.show);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [showvid, setshowvid] = useState(false);
  const profile = useSelector((state) => state.ProfileState.showProfile);

  const reset = (e) => {
    setText("");
    setShareImage("");
    setVideoLink("");
    dispatch(setModal(false));
  };

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const switchPhoto = () => {
    setshowvid(false);
    setVideoLink("");
  };

  const switchVideo = () => {
    setshowvid(true);
    setShareImage("");
  };

  const postArticles = (e) => {
    const payload = {
      image: shareImage,
      video: videoLink,
      userImage:  profile[0] ? profile[0].sharedImg : user.photoURL ? user.photoURL : '',
      userName:  profile[0] ? profile[0].email.split("@")[0] : user.displayName ? user.displayName : '',
      user: user,
      description: text,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    dispatch(postArticle(payload));
    reset(e);
  };

  return (
    <>
      <div className="post">
        <div className="modal">
          <div className="modal-top flex p-3 items-center justify-between">
            <p>Create a post</p>
            <ClearIcon
              onClick={(e) => reset(e)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="modal-profile p-3 flex items-center">
            <div className="mdpf-left">
              <img
                className="proc-img"
                src={
                  profile[0]
                    ? profile[0].sharedImg
                    : user.photoURL
                    ? user.photoURL
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDy7e81HWRTCOnuK5H8X-5YmiQqslGdanA&usqp=CAU"
                }
                alt=""
              />
            </div>

            <div className="mdpf-right ml-3">
              <h1>{user.displayName}</h1>
              <button className="flex items-center px-3">
                <PublicIcon /> Anyone <ArrowDropDownIcon />
              </button>
            </div>
          </div>

          <div className="modal-textarea flex justify-center p-3">
            <textarea
              value={text}
              placeholder="What do you want to talk about ?"
              id=""
              cols="70"
              rows="3"
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="modal-img flex justify-evenly">
            {shareImage && !videoLink && (
              <img
                style={{ width: "95%" }}
                src={URL.createObjectURL(shareImage)}
              />
            )}
            {videoLink && !shareImage && (
              <ReactPlayer width={"95%"} height={"190px"} url={videoLink} />
            )}
          </div>

          <div className="modal-bottom p-3">
            <div className="mdbt-top">
              <h1>Add Hashtag</h1>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png"
                id="file"
                name="image"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              {showvid && (
                <input
                  type="text"
                  placeholder="Please input a video link"
                  onChange={(e) => setVideoLink(e.target.value)}
                />
              )}
            </div>
            <div className="mdbt-bottom flex items-center justify-between">
              <ul className="flex items-center">
                <label htmlFor="file">
                  <li className="mr-3">
                    <PhotoSizeSelectActualIcon onClick={switchPhoto} />
                  </li>
                </label>

                <li>
                  <YouTubeIcon onClick={switchVideo} fontSize="large" />
                </li>
              </ul>

              <ul className="flex items-center">
                <li>
                  <ChatIcon /> Anyone
                </li>
                <button
                    onClick={(e) => postArticles(e)}
                  disabled={text === "" ? true : false}
                  style={
                    text === ""
                      ? { cursor: "not-allowed" }
                      : { cursor: "pointer" }
                  }
                >
                  Post
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddlePostModal;
