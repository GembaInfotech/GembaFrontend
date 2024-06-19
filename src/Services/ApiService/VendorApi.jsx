import axios from 'axios';

// localhost:4005/vendor/get-vendor

const instance = axios.create({
  baseURL: '/v1/api/vendor',
});

export const vendorUpdate = async ({data}) => {
  const token = await JSON.parse(localStorage.getItem('token'))
  console.log(data);
   const response = await instance.put('/update-vendor', {data} ,{
    headers: {
        'Authorization': `Bearer ${token}` 
      }
  });
  console.log(response);
  return response;
};

export const vendorData = async () => {
    const token = await JSON.parse(localStorage.getItem('token'))
    console.log(token);
     const response = await instance.get('/get-vendor', {
      
      headers: {
          'Authorization': `Bearer ${token}` 
        }
    });
    // console.log(response);
    return response;
  };

export const logoutVendor = async () => {
  console.log("here2 3")
  const token = await JSON.parse(localStorage.getItem('token'))
  console.log(token);
   const response = await instance.delete('/logout', {
    
    headers: {
        'Authorization': `Bearer ${token}` 
      }
  });
    
    console.log(response);
    return response;
  };