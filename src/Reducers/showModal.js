const initialState = {
  show: false,
};

const showModal = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        show: action.user,
      };
    default:
      return state;
  }
};

export default showModal;
