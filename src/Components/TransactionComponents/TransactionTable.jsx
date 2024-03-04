import React, { useEffect, useState } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";

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
        <div className="container mx-auto max-h-48 ">
              <div className='p-2 bg-[#EEEEEE] '>
            <h1 className=' font-semibold text-sm'> Total Income :  {income}</h1>

            <h1 className='text-sm font-semibold'> SGST :  {Math.floor(income*0.09)}</h1>
            <h1 className='text-sm font-semibold'> CGST :  {Math.floor(income*0.09)}</h1>
            <h1 className='text-sm font-semibold'> Total GST :  {Math.floor(income*0.18)}</h1>

            <h1 className='text-sm font-semibold'> Net Income (Total Income - Total GST) :  {income- Math.floor(income*0.18)}</h1>
                </div> 
            <table className="table-auto w-full">
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-4 text-white py-2">Serial No.</th>
                        <th className="px-4 text-white py-2">Car Number</th>
                        <th className="px-4 text-white py-2">Parking Name</th>

                        <th className="px-4 text-white py-2">Date</th>
                        <th className="px-4 text-white py-2">Booking Price</th>
                        <th className="px-4 text-white py-2">CGST</th>
                        <th className="px-4 text-white py-2">SGST</th>


                    </tr> 
                </thead>
                <tbody>
                    {booking.map((item, index) => (
                        <tr key={item._id}   className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
                            <td className="border px-4 text-sm font-semibold py-2">{index + 1}</td>
                            <td className="border px-4 text-sm font-semibold py-2">{item.num}</td>  
                            <td className="border px-4 text-sm font-semibold py-2">{item.pn}</td>  
                            <td className="border px-4 text-sm font-semibold py-2">{new Date(item.In).toLocaleDateString()}</td>
                            <td className="border px-4 text-sm font-semibold py-2">
                                {status === "Completed" ? exceedPrice(item.price) : item.price}
                            </td>
                            <td className="border px-4 text-sm font-semibold py-2">{Math.floor(item.price*0.09)}</td>  
                            <td className="border px-4 text-sm font-semibold py-2">{Math.floor(item.price*0.09)}</td>  

                        </tr>
                    ))}
                </tbody>
            </table>

          
            
        </div>
    );
}

export default TransactionTable;
`   `