import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import classes from "./pagination.module.css";

const Pagination = ({ setItemOffset, itemsPerPage, reviews = [] }) => {
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % reviews.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      nextClassName={`${classes.item} ${classes.nextArrow}`}
      previousClassName={`${classes.item} ${classes.previousArrow}`}
      pageClassName={`${classes.item}`}
      activeClassName={`${classes.item} ${classes.active}`}
      breakClassName={`${classes.item}`}
      containerClassName={`${classes.pagination}`}
      breakLabel="..."
      previousLabel={<AiOutlineArrowLeft size={16} />}
      nextLabel={<AiOutlineArrowRight size={16} />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={Math.max(1, Math.ceil(reviews.length / itemsPerPage))} 
    />
  );
};

export default Pagination;
