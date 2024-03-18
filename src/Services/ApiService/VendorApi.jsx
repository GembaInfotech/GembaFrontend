import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const vendorUpdate = async ({data}) => {
  const token = await JSON.parse(localStorage.getItem('token'))
   const response = await instance.put('/vendor/', {data} ,{
    headers: {
        'Authorization': `Bearer ${token}` 
      }
  });
  return response;
};

export const vendorData = async () => {
    const token = await JSON.parse(localStorage.getItem('token'))
     const response = await instance.get('/vendor/vendorData', {
      headers: {
          'Authorization': `Bearer ${token}` 
        }
    });
    return response;
  };