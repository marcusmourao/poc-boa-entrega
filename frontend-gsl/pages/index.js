import React, { useEffect } from 'react';

const index = () => {
  useEffect(() => {
      const authToken = localStorage.getItem('auth');

      if (authToken) {
          window.location.href = '/dashboard';
      } else {
        window.location.href = '/entrar';
      }
  }, []);
}

export default index;