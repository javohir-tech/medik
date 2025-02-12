import React from 'react'

//icons
import { MdStarRate } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";


function CommetCard({img}) {
    return (
        <div className='col-md-4 '>
            <div className='comment-card rounded-3'>
                <div className='card-icons'>
                    <MdStarRate className='text-warning me-2' />
                    <MdStarRate className='text-warning me-2' />
                    <MdStarRate className='text-warning me-2' />
                    <MdStarRate className='text-warning me-2' />
                    <MdOutlineStarRate className='text-warning me-2' />
                </div>
                <p className='my-4'>Slate helps you see how many
                    more days you need to work to
                    reach your financial goal.
                </p>
                <div className='card-image'>
                    <img src={img} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}

export default CommetCard
