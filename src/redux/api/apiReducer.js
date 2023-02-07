const initialState = {
  loading: true,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQ":
      return {
        ...state,
        loading: true,
        data:[],
        error:''
      };
    case "FETCH_REQ_SUC":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error:''
      };
    case "FETCH_REQ_ERR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data:[]
      };
      default :
      return state
  }
};
export default reducer;