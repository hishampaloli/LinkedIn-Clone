import { storage } from "../Firebase/Firebase";
import db from "../Firebase/Firebase";

export const setArticle = (payload) => ({
    type: 'SET_ARTICLE',
    payload: payload,
  });

  export const getArticles = (payload) => ({
    type: 'GET_ARTICLES',
    payload: payload,
  });
  

  export const setArticleLoading = (status) => ({
    type: 'SET_ARTICLE_LOADING',
    status: status,
  })
  
export function postArticle(payload) {
    
    return (dispatch) => {
        dispatch(setArticleLoading(true))
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
                image: payload.userImage,
                name: payload.userName
              },
              video: payload.video,
              sharedImg:downloadURL,
              comments:0,
              description: payload.description,
              id: payload.id,
            })
            dispatch(setArticleLoading(false))
          }
          );
        
         
        } else   {
          db.collection('articles').add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.userImage,
              name: payload.userName
            },
            video: payload.video,
            sharedImg:'',
            comments:0,
            description: payload.description,
            id: payload.id,
          })
          dispatch(setArticleLoading(false))
        }
      };
  }

  export function getArticlesAPI(id) {
    return (dispatch) => {
      let payload;
  
      db.collection('articles').orderBy('actor.date', 'desc')
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload))
      })
    }
  }

  export function deleteArticleAPI(id) {
    return (dispatch) => {
        db.collection("articles").where("id", "==", id).get()
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
        });
    }
  }