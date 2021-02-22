import React from 'react';
import './App.css';
import Button from './components/Button';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  
  return (
    <>
      <Button />
      <LogoutButton />
    </>
  );
}

export default App;
