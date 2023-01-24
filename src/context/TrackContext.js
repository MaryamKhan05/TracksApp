import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) =>async (name, location) => {

    await trackerApi.post('/tracks', {name,location });
    console.log('saved')
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
