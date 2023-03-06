import React, { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

function PaginationBar() {
  const [Page, setPage] = useState([]);
  const [Data, setData] = useState("");
  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const fetchData = async () => {
    await axios
      .get(
        Page
          ? `https://jsonplaceholder.typicode.com/comments?_page=${Page + 1}`
          : "https://jsonplaceholder.typicode.com/comments?_page=1"
      )
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, [Page]);
  console.log(Page);

  return (
    <>
      <div className="container d-flex justify-content-between my-4 flex-wrap  ">
        {Data ? (
          <>
            {Data.map((item, index) => (
              <div
                className="my-3 px-4 py-3"
                style={{
                  width: "500px",
                  border: "2px solid black",
                  borderRadius: "10px",
                  backgroundColor: "lightcyan",
                }}
              >
                <div
                  style={{
                    color: "dimgray",
                    textTransform: "lowercase",
                    border: "1px solid black",
                    borderBlockStart: " 2px",
                  }}
                >
                  <h5>{item.email}</h5>
                </div>
                <div style={{ textTransform: "capittalize" }}>{item.body}</div>
              </div>
            ))}
          </>
        ) : (
          <>
            <h4>Loading...</h4>
          </>
        )}
      </div>
      <>
        <h1 style={{ marginLeft: "600px", marginBottom: "50px" }}>
          Pagination with API
        </h1>
      </>

      <ReactPaginate
        previousLabel={"prev"} // this is some attribute in this tag
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={2} //at the end and the start of the pagination
        pageRangeDisplayed={5} //this is nmbr of page show in the middle of yr paginaton
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"} //add 2 btstrp classes
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
export default PaginationBar;
