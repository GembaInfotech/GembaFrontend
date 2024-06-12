import { useEffect } from 'react';
import {fetchGuardsAsync} from "../../../SliceFolder/GuardSlice/guard";
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const dispatch = useDispatch()
  const guard = useSelector((state) => state.Guard);
  console.log(guard.data);
  const storedUserData = JSON.parse(localStorage.getItem('gaurdData'));
  const guardId = storedUserData.guard._id
  console.log(guardId);
  useEffect(() => {
    if (!storedUserData) {
      window.location.href = "/login/auth/guard";
    } else {
      
      dispatch(fetchGuardsAsync({id:guardId}))
    }
  }, []);

  return (
    <div className=" bg-slate-200 h-[100%] p-2  ">
      <h1 className="font-bold text-white text-2xl mb-2 text-center bg-gray-800 rounded-sm p-2"> Guard Details</h1>
      <div className='flex justify-between shadow-lg bg-gray-100 '>
        <div className='px-2 py-2'>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Name:</span> {guard?.data.name}</p>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Phone:</span> {guard?.data.contact}</p>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Email:</span> {guard?.data.email}</p>
          <p className='py-2  text-sm'><span className="  py-2 text-sm font-bold">Address:</span> {guard?.data.address}</p>
        </div>
      </div>

    </div>
  );
};
export default Profile;
