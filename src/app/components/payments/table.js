import React from 'react'
import Tablerows from './tablerows'

const Table = () => {

    const tablecol = [
        "Name",
        "Amount",
        "Created At",
        "Paid At",
        "Status",
    ]

    const tabledata = [
        {
            name: "John Doe",
            amount: "$200",
            created_at: "2021-11-13",
            paid_at: "2021-11-13",
            status: "pending",
        },
        {
            name: "John Doe",
            amount: "$200",
            created_at: "2021-11-13",
            paid_at: "2021-11-13",
            status: "pending",
        },
        {
            name: "John Doe",
            amount: "$200",
            created_at: "2021-11-13",
            paid_at: "2021-11-13",
            status: "paid",
        },
        {
            name: "John Doe",
            amount: "$200",
            created_at: "2021-11-13",
            paid_at: "2021-11-13",
            status: "paid",
        },
        {
            name: "John Doe",
            amount: "$200",
            created_at: "2021-11-13",
            paid_at: "2021-11-13",
            status: "failed",
        },
    ]





    const tablehead = tablecol.map((col) => {
        return (
            <th className="px-2 py-2 md:px-3 md:py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">{col}</span>
                </div>
            </th>
        )
    })


    return (
        <div>
            <div className="overflow-auto border-gray-200  rounded-lg">
                <table className="w-full text-left text-gray-600 overflow-x-auto">
                    <thead className="py-4 bg-white table-header-group text-gray-600 text-sm text-left border-b-8 border-gray-100">
                        <tr>
                            {tablehead}
                        </tr>
                    </thead>
                    <tbody>
                        {tabledata.map((data,index)=>{
                            return <Tablerows tabledata={data} key={index} />
                        })}

                    </tbody>


                </table>


            </div>
        </div>
    )
}

export default Table