import { useEffect, useState } from 'react';

function TransactionTable({booking, status, parking}) {
    const [loading, SetLoading] = useState(true)
    const [income , setIncome]= useState(0);
    const [cgst, setCGST]= useState(0);
    const[sgst, setSGST] = useState(0);

    useEffect(() => {
     calincome();
     calcgst();
     calsgst();
     
    }, [booking]);

    const calincome=()=>{
        setIncome(0)
        let amt =0;
        booking.map((booking, index)=>{
       amt+=booking.bookingPrice;
        })
        setIncome(amt);

    }

    const calcgst=()=>{
        setCGST(0)
        let cgst =0;
        booking.map((booking, index)=>{
       cgst+= (booking.cgst+ booking.exceedCGST)
        })
        setCGST(Math.round(cgst));

    }

    const calsgst=()=>{
        setSGST(0)
        let sgst =0;
        booking.map((booking, index)=>{
       sgst+= (booking.cgst+ booking.exceedCGST)
        })
        setSGST(Math.round(sgst));

    }
    return (
     <div className="container mx-auto max-h-48 ">
       <div className='p-2 bg-[#EEEEEE] '>
     <h1 className=' font-semibold text-sm'> Total Income :  {income}</h1>
     <h1 className='text-sm font-semibold'> SGST :  {sgst}</h1>
     <h1 className='text-sm font-semibold'> CGST :  {cgst}</h1>
     <h1 className='text-sm font-semibold'> Total GST :  {(sgst+cgst)}</h1>
     <h1 className='text-sm font-semibold'> Net Income (Total Income - Total GST) :  {Math.round(income- (cgst+sgst))}</h1>
         </div> 
     <table className="table-auto w-full">
         <thead className="bg-gray-800">
             <tr>
                 <th className="px-2 text-white py-2">Serial No.</th>
                 <th className="px-2 text-white py-2">Car Number</th>
                 <th className="px-2 text-white py-2">Parking Name</th>
                 <th className="px-2 text-white py-2">Date</th>
                 <th className="px-2 text-white py-2">Booking Price</th>
                 <th className="px-2 text-white py-2">CGST</th>
                 <th className="px-2 text-white py-2">SGST</th>
                 <th className="px-2 text-white py-2">Total</th>
             </tr> 
         </thead>
         <tbody>
             {booking.map((item, index) => (
                 <tr key={item._id}   className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100 transition-colors hover:bg-gray-200'}>
                     <td className="border px-2 text-sm font-semibold py-2">{index + 1}</td>
                     <td className="border px-2 text-sm font-semibold py-2">{item.vehicle_number}</td>  
                     <td className="border px-2 text-sm font-semibold py-2">{item.parkingName}</td>  
                     <td className="border px-2 text-sm font-semibold py-2">{new Date(item.inTime).toLocaleDateString()}</td>
                     <td className="border px-2 text-sm font-semibold py-2">{ item.price+item.exceedPrice}
                     </td>
                     <td className="border px-2 text-sm font-semibold py-2">{item.cgst + item.exceedCGST}</td>  
                     <td className="border px-2 text-sm font-semibold py-2">{item.cgst + item.exceedCGST}</td>  
                     <td className="border px-2 text-sm font-semibold py-2">{item.bookingPrice}</td>  
                 </tr>
             ))}
         </tbody>
     </table> 
 </div>
    );
}

export default TransactionTable;
`   `