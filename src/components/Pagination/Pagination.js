//Component for UI Display button 1, 2, 3 ... accordingly
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import "./Pagination.css";

const Pagination = ({ pageSize, itemsCount, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            style={{ cursor: "pointer" }}
            key={page}
            className={
              page === currentPage
                ? "page-item active"
                : "page-item" && "clickable"
            }
          >
            <h6 className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </h6>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
