export const constants = {
  AUTHENTICATE:   "AUTHENTIFICATE",
  SET_DATA:       "SET_DATA",
  START_LOADING:  "START_LOADING",
  FINISH_LOADING: "FINISH_LOADING",
  LOADING_ERROR:  "LOADING_ERROR"
};

export const authenticate = credentials => ({ type: constants.AUTHENTICATE, payload: credentials });
export const setData = data => ({ type: constants.SET_DATA, payload: data });

export const startLoading = () => ({ type: constants.START_LOADING });
export const stopLoading = () => ({ type: constants.FINISH_LOADING });
export const loadingFailure = error => ({ type: constants.LOADING_ERROR, payload: error });
