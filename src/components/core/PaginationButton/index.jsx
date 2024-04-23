import styles from './styles.module.scss';
import {
  NavigationBracketEndR,
  NavigationBracketL,
  NavigationBracketR,
  NavigationBracketStartL,
} from '@svg';

const PaginationButton = (props) => {
  const { currentPage, setCurrentPage, totalPage } = props;

  const pageNumbers = [];
  const maxVisibleButtons = 5; // 최대 표시할 버튼 수

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  let startPage = Math.max(
    currentPage + 1 - Math.floor(maxVisibleButtons / 2),
    1,
  );
  let endPage = startPage + maxVisibleButtons - 1;
  if (endPage > totalPage) {
    endPage = totalPage;
    startPage = Math.max(endPage - maxVisibleButtons + 1, 1);
  }

  const handleStart = () => {
    setCurrentPage(0);
  };
  const handleEnd = () => {
    setCurrentPage(totalPage - 1);
  };

  const handlePrev = () => {
    if (currentPage - 5 < 0) {
      setCurrentPage(0);
    } else {
      setCurrentPage((prev) => prev - 5);
    }
  };

  const handleNext = () => {
    if (currentPage + 5 >= totalPage) {
      console.log(totalPage);
      setCurrentPage(totalPage - 1);
    } else {
      setCurrentPage((prev) => prev + 5);
    }
  };

  return (
    <div className={styles.paginationButtonWrap}>
      <div className={styles.naviLBtnWrap}>
        <div
          className={styles.naviLBtn}
          onClick={handleStart}
          data-active={currentPage !== 0}>
          {/* 맨처음으로 이동 */}
          <NavigationBracketStartL />
        </div>
        <div
          className={styles.naviLBtn}
          onClick={handlePrev}
          data-active={currentPage !== 0}>
          {/* 5페이지 앞으로 이동 */}
          <NavigationBracketL />
        </div>
      </div>
      <div className={styles.naviPageBtnWrap}>
        {pageNumbers.slice(startPage - 1, endPage).map((page) => (
          <div
            key={page - 1}
            className={styles.naviPageBtn}
            data-selected={page === currentPage + 1}
            onClick={() => setCurrentPage(page - 1)}>
            {page}
          </div>
        ))}
      </div>
      <div className={styles.naviRBtnWrap}>
        <div
          className={styles.naviRBtn}
          onClick={handleNext}
          data-active={currentPage !== totalPage - 1}>
          {/* 5페이지 뒤로 이동 */}
          <NavigationBracketR />
        </div>
        <div
          className={styles.naviRBtn}
          onClick={handleEnd}
          data-active={currentPage !== totalPage - 1}>
          {/* 맨뒤로 이동 */}
          <NavigationBracketEndR />
        </div>
      </div>
    </div>
  );
};

export default PaginationButton;
