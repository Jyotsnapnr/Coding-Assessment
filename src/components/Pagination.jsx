import React,{useState} from 'react'


function Pagination ({usersPerPage, totalUsers, paginate, currentPage}) {
    const pageNumbers = []
    const [startNumber, setStartNumber] = useState(1)
    const [lastNumber, setLastNumber] = useState(10)
 
    for(let i = 1; i<= Math.ceil(totalUsers / usersPerPage); i++){
        pageNumbers.push(i)
    }

    const prevButton = () => {
        if(startNumber -9 > 0){
            setLastNumber(lastNumber - 9)
            setStartNumber(startNumber - 9)
        }
    }

    const nextButton = () => {
        if(lastNumber +9 < pageNumbers.length){
            setLastNumber(lastNumber + 9)
            setStartNumber(startNumber + 9)
        }
    }

  return (

    <ul className='pagination justify-content-center'>
        <li className='page-item'>
            <button className='page-link' onClick={(e)=> {prevButton()}}>Prev</button>
        </li>
        {
            pageNumbers.map(number => {
                if(number >= lastNumber){
                    return null
                }
                if (number === currentPage){
                    return(
                        <li key={number} className='page-item active'>
                        <button onClick={() => paginate(number)} className='page-link'>{number}</button>
                        </li>
                    )
                }
                else if (number >= startNumber){
                    return (
                        <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>{number}</button>
                        </li>
                    )
                }
                return null
            })
        }
        <li className='page-item'>
            <button className='page-link' onClick={(e) => {nextButton()}}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination;