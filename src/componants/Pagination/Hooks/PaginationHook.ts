import { useState } from "react";

const usePaginationLogic = (dataLength: number, records: number) => {
  const [pages, setPages] = useState(1);

  const startingIndex: number = (pages - 1) * records;
  const lastIndex: number = pages * records;

  const noOfPages: number = dataLength / records;
  const previousPage = () => (pages > 1 ? setPages(pages - 1) : setPages(1));
  const nextPage = () =>
    pages < noOfPages ? setPages(pages + 1) : setPages(noOfPages);

  return {
    startingIndex,
    lastIndex,
    previousPage,
    nextPage,
    noOfPages,
    setPages,
  };
};
export default usePaginationLogic;
