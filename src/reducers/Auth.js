/*jshint esversion: 6 */

const SET_USER_INFO = 'AUTH/SET_USER_INFO';

const defaultUserInfo = {
  name: 'Demo User',
  image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png',
  jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTcwMzEwOTcsImV4cCI6MTUxNzIwMzg5NywianRpIjoiM0J0bnBJQ3VvZU5zUmR0R0Ruem5IayIsInN1YiI6ImNvYmExMiIsImlzQWRtaW4iOmZhbHNlLCJhcHB0eXBlIjoidGFsZW50IiwidWlkIjoiMUFFVnQxem9NWEtrcSIsInNjb3BlIjpbImNhbGVuZGFyLmNyZWF0ZSIsImNhbGVuZGFyLmRlbGV0ZSIsImNhbGVuZGFyLmxpc3QiLCJjYWxlbmRhci5yZWFkIiwiY2FsZW5kYXIudXBkYXRlIiwiY2F0ZWdvcnkucmVhZCIsImRlZmF1bHQuYWRkIiwiZGVmYXVsdC5kZWxldGUiLCJkZWZhdWx0Lmxpc3QiLCJkZWZhdWx0LnJlYWQiLCJkZWZhdWx0LnVwZGF0ZSIsImRlZmF1bHQudmlldyIsImV2ZW50LmNyZWF0ZSIsImV2ZW50LmRlbGV0ZSIsImV2ZW50Lmxpc3QiLCJldmVudC51cGRhdGUiLCJpbmJveC5jcmVhdGUiLCJpbmJveC5kZWxldGUiLCJpbmJveC5saXN0IiwiaW5ib3gucmVhZCIsImluYm94LnVwZGF0ZSIsIm1lZGlhLmNyZWF0ZSIsIm1lZGlhLmxpc3QiLCJtZWRpYS5yZWFkIiwibWVkaWEudXBkYXRlIiwidGFsZW50LWFjY291bnQuY3JlYXRlIiwidGFsZW50LWFjY291bnQuZGVsZXRlIiwidGFsZW50LWFjY291bnQubGlzdCIsInRhbGVudC1hY2NvdW50LnJlYWQiLCJ0YWxlbnQtYWNjb3VudC51cGRhdGUiLCJ0YWxlbnQuY3JlYXRlIiwidGFsZW50LmRlbGV0ZSIsInRhbGVudC5saXN0IiwidGFsZW50LnJlYWQiLCJ0YWxlbnQudXBkYXRlIl19.0q8RWICw_GoCxO7rZ4kyvoDnPSzv8oyQrQq3szNRJYE',
  isLoggedIn: false
};

export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  user: userInfo
});

export const setUserInfoState = () => (dispatch, getState) => {
  const userInfo = getState().Auth.user;
  dispatch(setUserInfo(userInfo));
}


export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user : action.user
      };
    default:
    
  }

  return state;
}