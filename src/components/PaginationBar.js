import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
function PaginationBar() {
  const [Page, setPage] = useState([]);
  const [Data, setData] = useState("");
  const handlePageClick = (data) => {
    setPage(data.selected);
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
  }, []);
  console.log(Page);

  return (
    <>
      <div className="reactDiv">
        {" "}
        {Data ? (
          <>Fetch complete</>
        ) : (
          <>
            <h4>Loading...</h4>
          </>
        )}
      </div>
      <h1>pagination</h1>
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
