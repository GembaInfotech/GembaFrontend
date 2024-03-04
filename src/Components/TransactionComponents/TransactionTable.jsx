import React, { useEffect, useState } from 'react';
function TransactionTable({booking, status, parking}) {
    const [income , setIncome]= useState(0);
    useEffect(() => {
     calincome();
    }, [booking]);

    const calincome=()=>{
        setIncome(0)
        let amt =0;
        booking.map((booking, index)=>{
       amt+=booking.price;
        })
        console.log(amt);
        setIncome(amt);

    }
    return (
        <div className="container mx-auto">
            <table className="table-auto w-full">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-4 text-white py-2">Serial No.</th>
                        <th className="px-4 text-white py-2">Car Number</th>
                        <th className="px-4 text-white py-2">Parking Name</th>

                        <th className="px-4 text-white py-2">Time In</th>
                        <th className="px-4 text-white py-2">Time Out</th>
                        <th className="px-4 text-white py-2">Status</th>
                        <th className="px-4 text-white py-2">Booking Price</th>
                    </tr> 
                </thead>
                <tbody>
                    {booking.map((item, index) => (
                        <tr key={item._id}   className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
                            <td className="border px-4 text-sm font-semibold py-2">{index + 1}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{item.num}</td>  
                            <td className="border px-4 text-sm font-semibold py-2">{item.pn}</td>  
                            <td className="border px-4 text-sm font-semibold py-2">{new Date(item.In).toLocaleTimeString()}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{new Date(item.out).toLocaleTimeString()}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{item.status}</td>
                            <td className="border px-4 text-sm font-semibold py-2">
                                {status === "Completed" ? exceedPrice(item.price) : item.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    <h1 className='text-xl font-semibold'> Net Income   {income}</h1>
            
        </div>
    );
}

export default TransactionTable;
`   `