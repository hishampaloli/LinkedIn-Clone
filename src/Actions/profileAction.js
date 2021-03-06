import { storage } from "../Firebase/Firebase";
import db from "../Firebase/Firebase";
import { useSelector } from "react-redux/es/exports";

export const setProfile = (payload) => ({
  type: "SET_PROFILE",
  payload: payload,
});

export const setProfileLoading = (status) => ({
  type: "SET_PROFILE_LOADING",
  status: status,
});

export function loadingAPI(pauload) {
  return (dispatch) => {
  }
}

export function postProfileAPI(payload) {
  return (dispatch) => {
    if (payload.ProfileImg != null) {
      const upload = storage
        .ref(`images/${payload.ProfileImg.name}`)
        .put(payload.ProfileImg);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`progress:${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("profiles").add({
            sharedImg: downloadURL,
            email: payload.email,
          });
        }
      );
    }
  };
}

export function getProfileAPI(pay) {
  return (dispatch) => {
    
    dispatch(setProfileLoading(true));
    let payload;
    const citiesRef = db.collection("profiles");

    const queryRef = citiesRef
      .where(
        "email",
        "==",
        // useSelector((state) => state.userState.user.email)
        pay.email
      )

      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(setProfile(payload));
        console.log("XXXX>>>", payload);
        dispatch(setProfileLoading(false));
        
      });
      
  };
}
