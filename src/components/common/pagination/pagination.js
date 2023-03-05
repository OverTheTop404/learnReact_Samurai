import style from "./pagination.module.scss";
import React, {useState} from "react";

const Pagination = ({totalPagesCount, itemsCount, onChangePage, currentPage, showedPages}) => {

    let pagesCount = Math.ceil(totalPagesCount / itemsCount)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {pages = [...pages, i]}

    // let stepPages = Math.ceil(pagesCount / showedPages)
    // let [portion, setPortion] = useState(1)
    // let rightBorder = showedPages * portion
    // let leftBorder = rightBorder - showedPages + 1

    let part = showedPages % 2 === 1
    let halfShowedPages = Math.ceil(showedPages / 2)

    let [leftBorder, setLeftBorder] = useState(1)
    let [rightBorder, setRightBorder] = useState(showedPages)

    let filteredPages = pages.filter(p => p >= leftBorder && p <= rightBorder)

    const newStep = page => {
        if (page <= halfShowedPages + (part ? 0 : 1)) {
            setLeftBorder(1)
            setRightBorder(showedPages)
            return
        }
        if (page >= pagesCount - halfShowedPages + 1) {
            setLeftBorder(pagesCount - showedPages + 1)
            setRightBorder(pagesCount)
            return
        }
        setLeftBorder(page - halfShowedPages + (part ? 1 : 0))
        setRightBorder(page + halfShowedPages - 1)

    }

    return (
        <div className={style.pagination}>

            {/*<button disabled={portion <= 1} onClick={() => {setPortion(portion - 1); onChangePage(leftBorder - showedPages)}}>Prev</button>*/}
            {/*{portion > 1 && <span onClick={e => {onChangePage(1); setPortion(1)}}>1 ...</span>}*/}


            <button className={style.breadButtonLeft} disabled={currentPage <= 1} onClick={e => {onChangePage(1); newStep(1)}}>First</button>
            <button className={style.breadButtonLeft} disabled={currentPage <= 1} onClick={() => {onChangePage(currentPage - 1); newStep(currentPage - 1)}}>Prev</button>

            {filteredPages.map(page => {
                return <span onClick={e => {
                    onChangePage(page)
                    newStep(page)
                }} className={currentPage === page && style.active}>{page}</span>
            })}

            <button className={style.breadButtonRight} disabled={currentPage >= pagesCount} onClick={() => {onChangePage(currentPage + 1); newStep(currentPage + 1)}}>Next</button>
            <button className={style.breadButtonRight} disabled={currentPage >= pagesCount} onClick={e => {onChangePage(pagesCount); newStep(pagesCount)}}>Last</button>

            {/*{portion < stepPages && <span onClick={e => {onChangePage(pagesCount); setPortion(stepPages)}}>... {pagesCount}</span>}*/}
            {/*<button disabled={portion >= stepPages} onClick={() => {setPortion(portion + 1); onChangePage(leftBorder + showedPages)}}>Next</button>*/}

        </div>
    )
}

export default Pagination