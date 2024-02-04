import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";
const Summarydetails = () => {
    const transactionDetails = [
        { title: 'Total Paid Transactions', value: 230 },
        { title: 'Sum of charges', value: 230 },
        { title: 'Average Ticket', value: 230 },
        { title: 'Total refund transaction', value: 230 },
        { title: 'Total amount of refund transaction', value: 230 },
    ];
    return (
        <div className='py-4 border-b'>
            <div className='flex items-center justify-between pb-4'>
                <div className='font-semibold text-sm'>Transaction</div>
                <div className='text-lg'>
                    <IoIosInformationCircleOutline />
                </div>

            </div>
            <div className='space-y-2'>
                {transactionDetails.map((detail, index) => (
                    <div key={index} className='flex text-sm text-gray-300 justify-between'>
                        <div>{detail.title}</div>
                        <div className='font-semibold'>{detail.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Summarydetails