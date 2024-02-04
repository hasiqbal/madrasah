import React from 'react'

const Tablerows = ({ tabledata }) => {

    return (
        <>
            <tr className="bg-white text-gray-900 text-sm font-semibold ">
                <td className="px-2 py-2 md:px-3 md:py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <p>{tabledata.name}</p>
                    </div>
                </td>
                <td className="px-2 py-2 md:px-3 md:py-4 whitespace-nowrap">
                    {tabledata.amount}
                </td>

                <td className="px-2 py-2 md:px-3 md:py-4 whitespace-nowrap">
                    {tabledata.created_at}
                </td>
                <td className="px-2 py-2 md:px-3 md:py-4 whitespace-nowrap">
                    {tabledata.paid_at}
                </td>
                <td className={"px-2 py-2 md:px-3 md:py-4 whitespace-nowrap capitalize" +
                    (tabledata.status === "paid" ? " text-green-500" :
                        tabledata.status === "pending" ? " text-yellow-500" :
                            tabledata.status === "failed" ? " text-red-500" :
                                "")
                }>
                    {tabledata.status}
                </td>
            </tr>
        </>



    )
}

export default Tablerows