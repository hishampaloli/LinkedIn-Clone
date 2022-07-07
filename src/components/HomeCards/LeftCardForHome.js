import React, { useEffect, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import AddIcon from "@mui/icons-material/Add";
import { postProfileAPI, getProfileAPI } from "../../Actions/profileAction";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function LeftCardForHome() {
  useEffect(() => {
    const payload = {
      email: user?.email ? user?.email : '',
    }
    dispatch(getProfileAPI(payload));
  }, []);

  const user = useSelector((state) => state.userState.user);
  const profile = useSelector((state) => state.ProfileState.showProfile);
  const [profileImg, setProfileImg] = useState(null);
  // console.log(user.photoURL);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setProfileImg(image);
    postProfile()
  };

  const postProfile = () => {
    const payload = {
      ProfileImg: profileImg,
      email: user.email,
    };
    dispatch(postProfileAPI(payload));
  };

  return (
    <div className="leftt flex flex-col items-center relative ">
      <div className="left-top rounded-t-lg"></div>

      <div className="left-body flex flex-col items-center">
        <div className="prof">
          {" "}
          <input
            type="file"
            accept="image/gif, image/jpeg, image/png"
            id="pic"
            name="image"
            style={{ display: "none" }}
            onChange={handleChange}
          />{" "}
          {!profile[0] && !user.photoURL && (
            <label htmlFor="pic">
              {" "}
              <AddIcon className="add-icon" fontSize="large" />
            </label>
          )}
          {/* {loading ? <CircularProgress style={{ zIndex: "200" }} /> : null} */}
          <img
            style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            src={
              profile[0]
                ? profile[0].sharedImg : user.photoURL ? user.photoURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDy7e81HWRTCOnuK5H8X-5YmiQqslGdanA&usqp=CAU"
            }
            alt=""
          />
        </div>
        <h1 className="text-base">{profile[0]?.email ? profile[0].email.split("@")[0] : user.displayName ? user.displayName : 'Add your Image'}</h1>
        <p>Welcome to linkedIn</p>
      </div>

      <div className="left-bottom">
        <li className=" flex flex-row  justify-between">
          <p>Who's viewed your profile</p> <p>294</p>
        </li>

        <li className=" flex flex-row  justify-between">
          <p>Impressions of your posts</p> <p>294</p>
        </li>
      </div>

      <div className="left-bottom-last ">
        <li className=" flex flex-row items-center  justify-start">
          <TouchAppIcon className="mr-2" /> Try Premium for free
        </li>
        <li className=" flex flex-row items-center  justify-start rounded-b-lg">
          <BookmarkIcon className="mr-2" /> My items
        </li>
      </div>
    </div>
  );
}

export default LeftCardForHome;
