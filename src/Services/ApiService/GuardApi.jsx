import axios from 'axios';

const instance = axios.create({
  baseURL: '/v1/api/guard',
});

export const fetchGuards = async ({id}) => {
  console.log(id);
  const response = await instance.get(`/get-guard/${id}`);
  console.log(response.data.data);
  return response.data.data;
};

  export const updateGuard = async (id, GuardData) => {
    console.log(GuardData, "testing..1");
    const response = await instance.put(`/update-guard/${id}`, { data: GuardData });
    console.log(response);
    localStorage.setItem('gaurdData', JSON.stringify(response.data)); // Store user data in local storage
    return response.data;
  };
