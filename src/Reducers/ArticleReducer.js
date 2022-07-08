const initialState = {
    articles: [],
    loading: false,
  };
  
  const articleReducer = (state = initialState, action) => {
    console.log('action****',action);
    switch (action.type) {
      case "GET_ARTICLES":
        return {
          ...state,
          articles: action.payload,
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
  