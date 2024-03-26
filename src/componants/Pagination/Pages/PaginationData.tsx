import { useEffect, useState } from "react";
import usePaginationLogic from "../Hooks/PaginationHook";

export interface dummyDataObj {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
}

const PaginationData: React.FC = () => {
  const [dummyData, setDummyData] = useState([]);
  const [pagination, setPagination] = useState({
    records: 10,
  });

  const {
    startingIndex,
    lastIndex,
    previousPage,
    nextPage,
    noOfPages,
    setPages,
  } = usePaginationLogic(dummyData.length, pagination.records);

  const data = async () => {
    const jsonData = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    if (jsonData && jsonData.products) {
      setDummyData(jsonData.products);
    }
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <>
      {dummyData.length > 0 && (
        <table className="table">
          <thead className="table-success">
            <tr>
              <th scope="col">Image</th>
              <th scope="col" className="col-lg-2">
                Brand
              </th>
              <th scope="col" className="col-lg-3">
                Title
              </th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {dummyData
              .slice(startingIndex, lastIndex)
              .map((element: dummyDataObj) => {
                return (
                  <>
                    <tr>
                      <th scope="row">
                        <img
                          style={{ width: "50px" }}
                          src={element.thumbnail}
                          alt={element.title}
                        ></img>
                      </th>
                      <td>{element.brand}</td>
                      <td>{element.title}</td>
                      <td>{element.price}</td>
                      <td>{element.stock}</td>
                      <td>{element.rating}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      )}

      {dummyData.length > 0 && (
        <div className="pagination mb-5 ">
          <span
            style={{
              cursor: "pointer",
              padding: "3px",
              background: "green",
              color: "black",
            }}
            onClick={() => {
              previousPage();
            }}
          >
            ◀️
          </span>
          {[...Array(noOfPages)].map((_, i) => {
            return (
              <>
                <span
                  onClick={() => {
                    setPages(i + 1);
                  }}
                  style={{
                    cursor: "pointer",
                    padding: "3px",
                    background: "green",
                    color: "black",
                  }}
                  className="pagesBox"
                >
                  {i + 1}
                </span>
              </>
            );
          })}
          <span
            style={{
              cursor: "pointer",
              padding: "3px",
              background: "green",
              color: "black",
            }}
            onClick={() => {
              nextPage();
            }}
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
};

export default PaginationData;
