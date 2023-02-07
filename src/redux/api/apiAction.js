import axios from "axios"

export const fetchApiReq = () =>{
  return {
    type: 'FETCH_REQ'
  }
}

const fetchApiSuccess = data =>{
  return {
    type: 'FETCH_REQ_SUC',
    payload: data
  }
}
const fetchApiError = error =>{
  return {
    type: 'FETCH_REQ_ERR',
    payload: error
  }
}

export const fetchApi = () =>{
  return (dispatch) => {
    axios.get('https://api.weatherapi.com/v1/current.json?key=7aa159a2175d45f99a2200436230702&q=vadodara&aqi=no')
      .then(response => {
        const data=response.data
        console.log(data);
        dispatch(fetchApiSuccess(data));
      })
      .catch(error=>{
        const errorMsg =error.message
        dispatch(fetchApiError(errorMsg));
      })

  }
}