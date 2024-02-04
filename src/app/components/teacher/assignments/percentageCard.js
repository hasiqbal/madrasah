import React from 'react'

const PercentageCard = ( 
    {achieved = 90,
    dataType = 'Due Assignments',}
) => {
    // circular bar data
    const height_width = 130;
    const stroke = 15;
    const percentage = achieved;
    const radius = (height_width - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100 * circumference);

    // Note we can make classes dynamic but somehow NextJs wasn't rendering correctly
    // const topBoxClass = `relative w-[130px] h-[130px] p-[15px] rounded-full`;
    // const innerBoxClass = `w-[100px] h-[100px] rounded-full flex items-center justify-center`;
    return (
        <div className='flex flex-col items-center p-5 border rounded-xl'>
            <div className='flex items-center gap-4 mb-4'>
                <div className={'w-5 h-5 '+((percentage<=40)?'bg-red-600':(percentage<=70)? 'bg-yellow-300': 'bg-green-600')+' rounded-md'}></div>
                <div className='mt-0.5 font-bold text-sm'>{dataType}</div>
            </div>
            {/* Handling circular progress bar */}
            <div className='my-4'>
                <div className={`relative w-[130px] h-[130px] p-[15px] rounded-full bg-gray-100`}>
                    <div className={`w-[100px] h-[100px] rounded-full flex items-center bg-white justify-center`}>
                        <div className='text-base font-bold'>
                            {percentage}%
                        </div>
                    </div>
                    <svg className='absolute top-0 left-0' width={height_width} height={height_width}>
                        <circle className='progress-ring__circle' stroke={(percentage<=40)?'red':(percentage<=70)? 'yellow': 'green' } strokeWidth={`${stroke}px`} fill='transparent' r={radius} cx={height_width / 2} cy={height_width / 2}
                            strokeDasharray={circumference + ' ' + circumference} strokeLinecap='round'
                            strokeDashoffset={offset} />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default PercentageCard;