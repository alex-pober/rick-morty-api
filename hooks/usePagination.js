import React, {useState, useEffect} from 'react'


export function usePagination(fetchSomething) {
  const [items, setItems] = useState([])
  const [cachedItems, setCachedItems] = useState({})
  console.log(cachedItems)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const clickNextPage = () => {
    setPage(page + 1);
  };

  const clickPrevPage = () => {
    setPage(page - 1);
  };


  const updateCachedItems = (data) => {
    const newCachedItems = cachedItems || {};

    newCachedItems[page] = data;

    setCachedItems(newCachedItems);
  };

  const updateItems = async () => {
    setLoading(true);

    try {
      const data = await fetchSomething(page);
      setItems(data);
      setTotalPages(data.info.pages)
      updateCachedItems(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  const checkIfItemsNeedToBeFetched = () => {
    const shouldFetchItems = !cachedItems || !cachedItems[page];

    return shouldFetchItems;
  };

  useEffect(() => {
    const shouldFetchItems = checkIfItemsNeedToBeFetched();

    if (shouldFetchItems) {
      updateItems();
    } else {
      setItems(cachedItems[page]);
    }
  }, [page])


  return {
    items,
    page,
    totalPages,
    loading,
    error,
    handlePageChange,
    clickNextPage,
    clickPrevPage,
  }
}
