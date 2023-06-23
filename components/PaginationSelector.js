import { useEffect, useState } from "react";
import {Button} from '../components/Button'
import styles from "@/styles/PaginationSelector.module.css"

export function PaginationSelector({page, totalPages, handlePageChange, clickNext, clickPrev}) {
  const [pageAmount, setPageAmount] = useState([1,2,3,4,5])
  useEffect(() => {
    if (page === 1) return;

    if (page === 2) return setPageAmount([1, 2, 3, 4, 5]);

    setPageAmount([page -2, page - 1, page, page + 1, page+2]);
  },[page])

  const onClickFirstItem = () => handlePageChange(pageAmount[0]);

  const onClickSecondItem = () => handlePageChange(pageAmount[1]);

  const onClickThirdItem = () => handlePageChange(pageAmount[2]);

  const onClickFourthItem = () => handlePageChange(pageAmount[3]);

  const onClickFifthItem = () => handlePageChange(pageAmount[4]);

  return (
    <div className={`${styles.paginationSelector}`}>
      <Button
        disabled={page === 1}
        border={page === 1}
        onClick={clickPrev}
      >
        &lt;
      </Button>
      <Button
        highlighted={page === pageAmount[1]}
        border={page === 1}
        onClick={onClickFirstItem}
      >
        {pageAmount[0]}
      </Button>
      <Button
        highlighted={page === pageAmount[2]-1}
        border={page === pageAmount[2]-1}
        onClick={onClickSecondItem}
      >
        {pageAmount[1]}
      </Button>
      <Button
        highlighted={page === pageAmount[3]-1}
        border={page === pageAmount[3]-1}
        onClick={onClickThirdItem}>{pageAmount[2]}</Button>


      {page !== (totalPages) &&
        <Button
        highlighted={page === pageAmount[4]-1}
        border={page === pageAmount[4]-1}
        onClick={onClickFourthItem}>{pageAmount[3]}</Button>
      }


      {page !== (totalPages) &&
        <Button
        highlighted={page === pageAmount[5]-1}
        border={page === pageAmount[5]-1}
        onClick={onClickFifthItem}>{pageAmount[4]}</Button>
      }

      {page !== totalPages &&
        <Button onClick={clickNext}>&gt; </Button>
      }

    </div>
  )
}
