import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalCount, pageSize, portionSize = 10, onChanged, currentPage}) => {
    let pagesCount = Math.ceil( totalCount / pageSize );
    let arrayOfPages = [];
    for (let i = 1; i <= pagesCount; i++) {
        arrayOfPages.push( i );
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div>
        {
            portionNumber > 1 && <button onClick={() => {
                setPortionNumber( portionNumber - 1 )
            }}>prev</button>
        }
        {
            arrayOfPages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map( p => {
                    return <span onClick={() => onChanged( p, pageSize )}
                                 className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}>{p}</span>
                } )
        }
        {
            portionCount > portionNumber && <button onClick={() => {
                setPortionNumber( portionNumber + 1 )
            }}>prev</button>
        }
    </div>
}

export default Paginator;