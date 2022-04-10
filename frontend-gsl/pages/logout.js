import React, { useEffect } from 'react';

const index = () => {
  useEffect(() => {
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
      window.location.href = '/entrar';
  }, []);
}

export default index;