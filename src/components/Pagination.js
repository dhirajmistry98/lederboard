import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  
  // Always show first and last page
  // Show 2 pages before and after current page
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 || 
      i === totalPages || 
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (
      (i === currentPage - 2 && currentPage > 2) || 
      (i === currentPage + 2 && currentPage < totalPages - 1)
    ) {
      pages.push('...');
    }
  }

  return (
    <div className="pagination">
      <button 
        className="page-btn prev"
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo;
      </button>
      
      {pages.map((page, index) => (
        page === '...' ? 
        <span key={`ellipsis-${index}`} className="ellipsis">...</span> :
        <button 
          key={page} 
          className={`page-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      
      <button 
        className="page-btn next"
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;