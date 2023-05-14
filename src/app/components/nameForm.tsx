"use client";
import { ChangeEvent, FormEvent, useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LocalStorageAdapter from '@/adapters/localStorage/localStorageAdapter';

const NameForm = () => {

  const [name, setName] = useState('');
  const router = useRouter();

  useLayoutEffect(() => {
    let currentProfile = LocalStorageAdapter.getItem("profile-name") as string;

    if (currentProfile && currentProfile.length > 0)
    {
      router.push(`main/welcome?name=${currentProfile}`);
    }
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`main/welcome?name=${name}`);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (<>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
  </>
  )
}

export default NameForm;
