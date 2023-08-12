// reducers.js
const initialState = {
    searchQuery: '',
    contentData: [],
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_QUERY':
        return {
          ...state,
          searchQuery: action.payload,
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          contentData: [...state.contentData,...action.payload],
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;