import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../Actions/showAction';
import ReactPlayer from "react-player";
import YouTubeIcon from '@mui/icons-material/YouTube';
import ChatIcon from '@mui/icons-material/Chat';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

function MiddlePostModal() {

    const user = useSelector((state) => state.userState.user)
    const modal = useSelector((state) => state.showState.show)
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [showvid, setshowvid] = useState(false);

    console.log('show>>>>', modal);

    const reset = (e) => {
        dispatch(setModal(false))
    }

    const handleChange = (e) => {

    }

    const switchPhoto = () => {

    }

    const switchVideo = () => {

    }


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
                  {user && user.photoURL ? <img className='proc-img' src={user.photoURL} alt="" /> : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" alt="" srcset="" /> } 
                  </div>
    
                  <div className="mdpf-right ml-3">
                    <h1>{user.displayName}</h1>
                    <button className="flex px-3">
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
    
                <div  className="modal-img flex justify-evenly">
                  {shareImage && !videoLink && <img src={URL.createObjectURL(shareImage)} />}
                  {videoLink && !shareImage && (
                    <ReactPlayer width={"45%"} height={"190px"} url={videoLink} />
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
                    {showvid && ( <input
                      type="text"
                      placeholder="Please input a video link"
                     
                      onChange={(e) => setVideoLink(e.target.value)}
                    />)}
                   
                  </div>
                  <div className="mdbt-bottom flex items-center justify-between">
                    <ul className="flex items-center">
                      <label htmlFor="file">
                        <li className="mr-3">
                          <PhotoSizeSelectActualIcon onClick={switchPhoto} />
                        </li>
                      </label>
    
                      <li>
                        <YouTubeIcon
                          onClick={switchVideo}
                          fontSize="large"
                        />
                      </li>
                    </ul>
    
                    <ul className="flex items-center">
                      <li>
                        <ChatIcon /> Anyone
                      </li>
                      <button
                    //   onClick={(e) => postArticle(e)}
                      disabled={text === '' ? true: false}
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

export default MiddlePostModal