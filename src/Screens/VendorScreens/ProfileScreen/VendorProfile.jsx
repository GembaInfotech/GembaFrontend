import { useEffect } from 'react';
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { vendorDataAsync } from '../../../SliceFolder/VendorSlice/Vendor';
import PulseLoader from "react-spinners/PulseLoader";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const vendor = useSelector((state) => state.Vendor);
  console.log(vendor);

  useEffect(() => {

    if (!token) window.location.href = "/login/auth/vendor";
    if (vendor.status == "idle") dispatch(vendorDataAsync());

  }, [dispatch]);

  return (
    <div>
      {vendor.status == "loading" && <div className='flex justify-center items-center min-h-screen'>       <PulseLoader color="#000" /> </div>}

      {vendor.status == "failed" && <div><h1 className='text-red-500 p-4'>Some error Occured While Loading the Data... Kindly Refresh or Login Again...</h1></div>}

      {vendor.status == "succeeded" && !vendor.error && vendor.data && <div className="container mx-auto  px-2 py-2">

        <h1 className="font-light text-xl mb-2 bg-gray-300 rounded-sm p-1"> Profile</h1>
        <h1 className="font-bold text-xl mb-2 rounded-sm p-1"> Vendor Code : {vendor?.data?.code}</h1>

        <div className='flex justify-between  bg-gray-100 h-[80%] '>
          
          <div className='px-2 py-8 flex '>
          <div className="bg-blue-900 text-white p-2 m-1">  <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Title: M/S</span> </p>
            <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Name:</span> {vendor?.data?.firstName} {vendor?.data?.lastName}</p>
            <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Company  Registeration No.:</span> 934543543</p>
            <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Contact </span>  {vendor?.data?.contact}</p>
            <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Email Id </span> {vendor?.data?.email}</p>
            <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">PAN No.: *</span>  DRXPG0107F</p>
            <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">GST No.:</span>  04DRXPG01078328</p></div>

<div className="bg-blue-900 text-white p-2 m-1 ">
  
            
<p className='py-2  text-sm'><span className="  py-2 text-lg font-bold">Billing Address:</span></p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">address:</span> {vendor?.data?.address}</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">postal code:</span>439002 </p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold"> city:</span> agra </p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">state:</span> uttar pradesh</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">contact:</span> 8203082932</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold"> email:</span> yahoo@example.com</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">country:</span> India </p>

</div>
<div className="bg-blue-900 text-white p-2 m-1 ">
  
            
<p className='py-2  text-sm'><span className="  py-2 text-lg font-bold">Communication Address:</span> </p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">address:</span> {vendor?.data?.address}</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">postal code:</span>439002 </p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold"> city:</span> agra </p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">state:</span> uttar pradesh</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">contact:</span> 8203082932</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold"> email:</span> yahoo@example.com</p>
<p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">country:</span> India </p>

</div>
         

          </div>
          <Link to="/update/vendor"> <h1 className=' font-normal p-4  text-gray-600 text-xl'><MdEdit /></h1></Link>
        </div>
      </div>}
    </div>
  );
};

export default Profile;
