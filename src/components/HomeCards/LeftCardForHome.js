import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { useSelector } from "react-redux";

function LeftCardForHome() {

  const user = useSelector((state) => state.userState.user);
  console.log(user.photoURL);

  return (
    <div className="leftt flex flex-col items-center relative ">
      <div className="left-top rounded-t-lg"></div>

      <div className="left-body flex flex-col items-center">
        <div className="prof"><img style={{borderRadius:'50%'}} src={user ? user.photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGDy7e81HWRTCOnuK5H8X-5YmiQqslGdanA&usqp=CAU'} alt="" /></div>
        <h1 className="text-base">Hisham Paloli</h1>
        <p>MernStack web developer</p>
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
