import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGuardAsync } from '../../../SliceFolder/GuardSlice/guard';
function GuardForm({id, data}) {
const dispatch = useDispatch();
    const [GuardData, setGuardData] = useState({
        name: data.name,
        adhar: data.adhar,
        mob: data.mob,
        mail: data.mail,
        add: data.add
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setGuardData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGuardAsync({ id, GuardData }))
        .then(() => {
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error updating guard:', error);
        });
};
    const handleCancel = () => {
        window.location.reload();
    };

    return (
        <div className="flex justify-center ">
            <div className="edit-form bg-slate-300 shadow-md rounded mt-16 px-8 py-6  w-1/2 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={GuardData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="adhar">
                            Adhar No.
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="adhar"
                            type="text"
                            placeholder="Adhar No."
                            value={GuardData.adhar}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="contactNumber"
                            type="text"
                            placeholder="Contact Number"
                            value={GuardData.mob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={GuardData.mail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Address"
                            value={GuardData.add}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Save
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GuardForm;
