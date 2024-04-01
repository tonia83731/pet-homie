import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination(props) {
  const { pages, currentPage, onArrowClick, onNumClick } = props;
  return (
    <div className="flex gap-2 mt-4">
      <button
        id="first"
        className="hover:text-live-green disabled:text-slate-300"
        title="第一頁"
        onClick={onArrowClick}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <button
        id="prev"
        className="hover:text-live-green disabled:text-slate-300"
        title="上一頁"
        onClick={onArrowClick}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div className="mx-4 flex gap-2">
        {pages.map((page) => {
          return (
            <button
              className={`hover:font-bold ${
                currentPage === page
                  ? "bg-brightly-orange w-6 h-6 flex justify-center items-center text-white rounded-full font-bold"
                  : ""
              }`}
              key={page}
              onClick={onNumClick}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        id="next"
        className="hover:text-live-green disabled:text-slate-300"
        title="下一頁"
        onClick={onArrowClick}
        disabled={currentPage === pages?.length}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        id="last"
        className="hover:text-live-green disabled:text-slate-300"
        title="最末頁"
        onClick={onArrowClick}
        disabled={currentPage === pages?.length}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}
