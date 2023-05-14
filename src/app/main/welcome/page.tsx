"use client";
import LocalStorageAdapter from '@/adapters/localStorage/localStorageAdapter';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '../loading';

const WelcomePage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {

    var currentStored = LocalStorageAdapter.getItem("profile-name") as string;

    if (name && currentStored != name) {
      LocalStorageAdapter.setItem("profile-name", name);
    }
  }, [])

  if (!name) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>You can now access the restricted routes.</p>
    </div>
  );
};



export default WelcomePage;
