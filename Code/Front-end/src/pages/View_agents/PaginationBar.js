import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function PaginationBar({
  total = 0,
  current = 1,
  pageSize = 12,
  onPageChange
}) {

const totalPages = Math.max(1, Math.ceil(total / pageSize));


  const [jumpPage, setJumpPage] = useState("");

  const handleJump = (e) => {
    if (e.key === "Enter") {
      const page = parseInt(jumpPage);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        onPageChange(page);
        setJumpPage("");
      }
    }
  };

  
  const getVisiblePages = () => {
    const pages = [];

    

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (current > 4) pages.push("...");

      for (let i = current - 1; i <= current + 1; i++) {
        if (i > 1 && i < totalPages) pages.push(i);
      }

      if (current < totalPages - 3) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-10 flex flex-wrap justify-center items-center gap-2 text-sm text-gray-800">
      <p className="mr-4 font-medium">
        There are {total} agents in total.
      </p>

      {/* Prev */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        className="!min-w-[24px] !px-1.5 !py-1 leading-none"
      >
        &lt;
      </Button>

      {/* Page buttons */}
      {visiblePages.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">...</span>
        ) : (
          <Button
            key={page}
            variant={page === current ? "contained" : "outlined"}
            size="small"
            onClick={() => onPageChange(page)}
             className="!min-w-[24px] !px-1.5 !py-1 leading-none"
          >
            {page}
          </Button>
        )
      )}

      {/* Next */}
      <Button
        variant="outlined"
        size="small"
        onClick={() => onPageChange(current + 1)}
        disabled={current === totalPages}
        className="!min-w-[24px] !px-1.5 !py-1 leading-none"
      >
        &gt;
      </Button>

      {/* Jump to page */}
      <span className="ml-4">Jump to page</span>
      <TextField
        size="small"
        value={jumpPage}
        onChange={(e) => setJumpPage(e.target.value)}
        onKeyDown={handleJump}
        inputProps={{
          min: 1,
          max: totalPages,
          className: "text-center !w-16 !px-2 !py-1"
        }}
      />
    </div>
  );
}
