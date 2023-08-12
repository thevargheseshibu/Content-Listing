// actions.js
import {fetchData} from "../API/api"

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_CONTENT_DATA = 'SET_CONTENT_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';


export const setSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
};



export const fetchContentData = (page, setHasMore) => async (dispatch) => {
  try {
    const data = await fetchData(page);
    console.log("fetchData",data)
    if (data.length === 0) {
      console.log("Data Failed")
      setHasMore(false); // Update hasMore in the component's state
    } else {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    }
  } catch (error) {
    setHasMore(false);
    console.error('Error fetching data:', error);
  }
};
