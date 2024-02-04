import React from 'react'
import Classdetails from './classdetails'


const Classdescription = () => {
    return (
        <div className='bg-gray-100 py-5 sm:py-10 px-4 sm:px-8 md:flex rounded-xl'>
            <div className='w-full md:w-1/2 md:pr-20 md:border-r border-gray-300'>
                <div className='font-bold text-xl mb-6'>
                    Class Description
                </div>
                <div className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla pariatur unde adipisci quas odit iusto necessitatibus autem sit dolores ipsam itaque error, optio, laboriosam nobis ipsum, voluptatum quam magni perspiciatis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, animi. Velit nam excepturi, optio repudiandae dolorem, dolor aspernatur molestias veritatis obcaecati quos sed impedit eos perspiciatis voluptates commodi, ea quam!

                </div>
                <div className='mt-16 space-y-4'>
                    <div className='text-sm'>Overall Progress</div>
                    <div className='bg-blue-700 w-full h-6 rounded-full'>
                        <div className='bg-blue-950 h-full w-2/3 rounded-full relative'>
                            <div className='text-xs text-white absolute top-1 right-2'>66%</div>
                        </div>
                    </div>    
                </div>
            </div>
            <div className='w-full py-20 sm:px-5 md:w-1/2 md:px-20'>
                <Classdetails />
            </div>

        </div>
    )
}

export default Classdescription