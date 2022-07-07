import { storage } from "../Firebase/Firebase";
import db from "../Firebase/Firebase";

export const setArticle = (payload) => ({
    type: 'SET_ARTICLE',
    payload: payload,
  });


  
export function postArticle(payload) {
    
  return (dispatch) => {

    if (payload.image != '') {
      const upload = storage
      .ref(`images/${payload.image.name}`)
      .put(payload.image);
      upload.on(
        'state_changed',
         (snapshot) => {
        const progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;

        console.log(`progress: ${progress}%`);
        if(snapshot.state === 'RUNNING') {
          console.log(`progress:${progress}%`);
        }
      },
      (error) => console.log(error.code),
      async () => {
        const downloadURL = await upload.snapshot.ref.getDownloadURL();
        db.collection('articles').add({
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL
          },
          video: payload.video,
          sharedImg:downloadURL,
          comments:0,
          description: payload.description,
        })
      }
      );
    
     
    } else if (payload.video)  {
      db.collection('articles').add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL
        },
        video: payload.video,
        sharedImg:'',
        comments:0,
        description: payload.description,
      })
    }
  };
  }