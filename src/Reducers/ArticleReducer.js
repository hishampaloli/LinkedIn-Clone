const initialState = {
    articles: [],
    loading: false,
  };
  
  const articleReducer = (state = initialState, action) => {
    console.log('action****',action.payload);
    switch (action.type) {
      case "SET_ARTICLE":
        return {
          ...state,
          showProfile: action.payload,
        };
        case "SET_ARTICLE_LOADING":
          return {
            ...state,
            loading: action.status,
          }
      default:
        return state;
    }
  };
  
  export default articleReducer;
  