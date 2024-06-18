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

export const fetchGuardsbyParkingId = async ({id}) => {
  console.log(id);
  const response = await instance.get(`/get-guards/${id}`);
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

  export const logoutGuard = async () => {
    console.log("here2 3")
    const token  = JSON.parse(localStorage.getItem('gaurdData')).accessToken;
    

    console.log(token);
     const response = await instance.delete('/logout', {
      
      headers: {
          'Authorization': `Bearer ${token}` 
        }
    });
      
      console.log(response);
      return response;
    };
