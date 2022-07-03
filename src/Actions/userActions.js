import { auth, provider, storage } from "../Firebase/Firebase";
import db from "../Firebase/Firebase";

export const setUser = (payload) => ({
    type: 'SET_USER',
    user: payload,
  });

  export const signInWithGoogle = () => {
    return (dispatch) => {
    auth.signInWithPopup(provider).then((res) => {
      console.log(res.user)
      dispatch(setUser(res.user))
    }).catch((error) => {
      console.log(error.message)
    })
}
  }

  export const signOut = () => {
    return (dispatch) => {
        auth.signOut().then((res) => {
            console.log(res)
            dispatch(setUser(null))
          }).catch((error) => {
            console.log(error.message)
          })
    }
  }

  export function getUserAuth() {
    return (dispatch) => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          dispatch(setUser(user));
        }
      });
    };
  }
