import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGuardAsync } from '../../SliceFolder/GuardSlice/guard';
function GuardForm({id, data}) {
const dispatch = useDispatch();
    const [GuardData, setGuardData] = useState({
        name: data.name,
        adhar: data.adhar,
        contactNumber: data.contactNumber,
        email: data.email,
        address: data.address
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
    console.log('Form submitted:', GuardData);
    dispatch(updateGuardAsync({ id, GuardData }))
        .then(() => {
            // Reload the page after successful update
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error updating guard:', error);
            // Handle error if needed
        });
};
    const handleCancel = () => {
        console.log('Form canceled');
        window.location.reload();
    };

    return (
        <div className="flex justify-center">
            <div className="edit-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2">
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
                            value={GuardData.contactNumber}
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
                            value={GuardData.email}
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
                            value={GuardData.address}
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
