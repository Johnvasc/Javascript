import React, { useEffect } from 'react'

function CheckToken(){
    useEffect(() => {
      const token = localStorage.getItem('token')
      if(!token) window.location.href = '/login'
    }, []);

  return null;
};

export default CheckToken;