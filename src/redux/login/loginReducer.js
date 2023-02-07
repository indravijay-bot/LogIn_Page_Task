const initialState = {
  
  users : []

}
const loginReducer = (state=initialState,action) => {
  switch(action.type){
    case 'LOGIN': return {
      ...state,
      users: state.users.concat(action.payload)
    }
    default:
      return state;
  }
}
export default loginReducer;