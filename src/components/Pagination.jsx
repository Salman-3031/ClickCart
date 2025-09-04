import React from 'react'

const getPages = (current, total) => {
    const pages = []
    // console.log(pages)
    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
    }
    else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...', total)
        } else if (current >= total - 2) {
            pages.push(1, '...', total - 2, total - 1, total)
        }
        else {
            pages.push(1, '...', current - 1, current, current + 1, "...", total)
        }
    }
    return pages
}

const Pagination = ({ page, pageHandler, dynamicPage }) => {

    return (
        <div className=' text-center space-x-2 mt-8'>
            <button
            onClick={()=>pageHandler(page -1)} disabled={page === 1} className={`${page === 1 ? 'bg-[#ed466d] cursor-not-allowed' : 'bg-btnColor'} mt-3 text-white px-2 py-1  rounded-sm`}>Prev</button>

            {/* Page numbers */}
            {getPages(page, dynamicPage).map((item, index) => (
                <span
                    key={index}
                    onClick={() => typeof item === 'number' && pageHandler(item)}
                    className={`cursor-pointer max-w-4 ${item === page ? 'font-bold text-btnColor' : ""}`}>
                        {item}
                </span>
            ))
            }
            <button
            onClick={()=>pageHandler(page +1)} disabled={page === dynamicPage} className={`${page === dynamicPage ? 'bg-[#ed466d] cursor-not-allowed' : 'bg-btnColor'} mt-3 text-white px-2 py-1  rounded-sm`}>Next</button>
        </div>
    )
}

export default Pagination