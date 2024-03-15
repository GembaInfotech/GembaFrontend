const getToken = async()=>{
    const token = await JSON.parse(localStorage.getItem('token'));
    return token;
  }
  

export default getToken;
