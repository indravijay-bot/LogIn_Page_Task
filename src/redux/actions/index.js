import { IMAGES,LOGIN } from '../constants';
console.log(IMAGES)

const login = (users) =>{
    return {
      type: LOGIN.LOGIN,
      payload: users
    }
  }

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});


export {
    loadImages,
    setImages,
    setError,
    login
};
