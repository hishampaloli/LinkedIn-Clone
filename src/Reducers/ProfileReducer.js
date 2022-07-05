const initialState = {
    showProfile: [],
    loading: false,
  };
  
  const ProfileReducer = (state = initialState, action) => {
    console.log('action****',action.payload);
    switch (action.type) {
      case "SET_PROFILE":
        return {
          ...state,
          showProfile: action.payload,
        };
        case "SET_PROFILE_LOADING":
          return {
            ...state,
            loading: action.status,
          }
      default:
        return state;
    }
  };
  
  export default ProfileReducer;
  