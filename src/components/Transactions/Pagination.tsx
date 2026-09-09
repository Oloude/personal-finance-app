import { MdArrowLeft, MdArrowRight } from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPageNumber: number;
};

const getPaginationNumbersDesktop = (
  currentPage: number,
  totalPages: number,
): (number | "...")[] => {
  // Show everything when there are few pages
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  // Beginning
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  // Ending
  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  // Middle
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

const getPaginationNumbersMobile = (
  currentPage: number,
  totalPages: number
): (number | "...")[] => {
  if (totalPages <= 4) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }

  if (currentPage <= 2) {
    return [1, 2, "...", totalPages];
  }

  if (currentPage >= totalPages - 1) {
    return [1, "...", totalPages - 1, totalPages];
  }

  return [1, "...", currentPage, totalPages];
};

function Pagination({
  currentPage,
  setCurrentPage,
  totalPageNumber,
}: PaginationProps) {
  const pagesDesktop = getPaginationNumbersDesktop(
    currentPage,
    totalPageNumber,
  );
  const pagesMobile = getPaginationNumbersMobile(currentPage, totalPageNumber);

  function handlePrev() {
    setCurrentPage((prev: number) => prev - 1);
  }

  function handleNext() {
    setCurrentPage((prev) => prev + 1);
  }
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        disabled={currentPage === 1}
        onClick={handlePrev}
        className="flex items-center justify-center gap-4 px-4 py-3 w-12 h-10 md:w-24 md:h-10 rounded-lg border border-beige500 text-grey900 text-preset4 "
      >
        <MdArrowLeft className="w-6 h-6 text-grey500 shrink-0" />
        <span className="hidden md:inline ">Prev</span>
      </button>
      <div className="md:flex items-center gap-2 hidden">
        {pagesDesktop.map((page, index) => {
          if (page === "...") {
            return <span key={`ellipsis-${index}`}>...</span>;
          }

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-4 border border-beige500 rounded-lg text-preset4  flex items-center justify-center w-10 h-10  ${
                currentPage === page ? "bg-grey900 text-white" : " text-grey500"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2 md:hidden">
        {pagesMobile.map((page, index) => {
          if (page === "...") {
            return <span key={`ellipsis-${index}`}>...</span>;
          }

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-4 border border-beige500 rounded-lg text-preset4  flex items-center justify-center w-10 h-10  ${
                currentPage === page ? "bg-grey900 text-white" : " text-grey500"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage === totalPageNumber}
        onClick={handleNext}
        className="flex items-center justify-center gap-4 px-4 py-3 w-12 h-10 md:w-24 md:h-10 rounded-lg border border-beige500 text-grey900 text-preset4"
      >
        <span className="hidden md:inline ">Next</span>
        <MdArrowRight className="w-6 h-6 text-grey500 shrink-0" />
      </button>
    </div>
  );
}

export default Pagination;
