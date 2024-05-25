import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlerPageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-2  bottom-0 bg-white fixed">
      <div className="flex justify-between w-11/12 max-w-[670px] py-2">
        <div className="flex gap-x-4 ">
          {page > 1 && (
            <button
              onClick={() => handlerPageChange(page - 1)}
              className="border border-black p-1 rounded-md text-[12px] cursor-pointer"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => {
                handlerPageChange(page + 1);
              }}
              className="border border-black p-1 px-4 rounded-md text-[12px] cursor-pointer"
            >
              Next
            </button>
          )}
        </div>

        <div className="flex items-center text-[12px]">
          {
            `Page ${page} of ${totalPages} `
          }
        </div>


      </div>
    </div>
  );
};

export default Pagination;
