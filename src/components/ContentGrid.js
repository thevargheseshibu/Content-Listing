import React, { useEffect ,useState,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, fetchContentData } from './actions/action'; // Update with your actual action creators
import ContentItem from './ContentItem';
import SearchBar from './SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import debounce from 'lodash/debounce'; // Import debounce function

const ContentGrid = () => {

  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery); // Update with your actual state property

  const contentData = useSelector((state) => state.search.contentData); // Update with your actual state property
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if more data is available

  useEffect(() => {
    if(currentPage<4){
    dispatch(fetchContentData(currentPage, setHasMore));
    }
    else{
      setHasMore(false)
    }
  }, [dispatch, currentPage]);

  const debouncedHandleSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchQuery(query));
    }, 300),
    [dispatch] // eslint-disable-next-line react-hooks/exhaustive-deps
    
  );
 
  const handleLoadMore = () => {
    if(currentPage<4){
    setCurrentPage(currentPage + 1); 
    }// Load the next page

  };

  const filteredData = contentData?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {console.log("searchQuery", searchQuery)}
      
      {<SearchBar setSearchQuery={debouncedHandleSearch} />}

      <InfiniteScroll
        dataLength={filteredData.length} // This is important to track the data length
        next={handleLoadMore}
        hasMore={hasMore}
      >
        <div className="content-grid">

          {filteredData?.map((item, id) => (
            <ContentItem key={id} item={item} filteredData />
          ))}
        </div>
      </InfiniteScroll>

    </div>
  );
};

export default ContentGrid;
