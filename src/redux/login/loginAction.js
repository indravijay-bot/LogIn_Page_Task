export const login = (users) =>{
  return {
    type: 'LOGIN',
    payload: users
  }
}