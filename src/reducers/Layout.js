const SET_MOBILE_NAV_VISIBILITY = 'LAYOUT/SET_MOBILE_NAV_VISIBILITY';

export const setMobileNavVisibility = (visibility) => ({
  type: SET_MOBILE_NAV_VISIBILITY,
  visibility
});

/*jshint esversion: 6 */
export const toggleMobileNavVisibility = () => (dispatch, getState) => {
  let visibility = getState().Layout.mobileNavVisibility;
  dispatch(setMobileNavVisibility(!visibility));
}

export default function reducer(state = {
  mobileNavVisibility: false
}, action) {
  switch (action.type) {
    case SET_MOBILE_NAV_VISIBILITY:
      return {
        ...state,
        mobileNavVisibility: action.visibility
      };
    default:
  }
  return state;
}