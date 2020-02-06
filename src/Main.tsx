import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useStore, useUpdate } from './initStore';

const Main: React.FC = () => {
  const store = useStore();
  const [firstName, setFirstName] = useState(store.firstName);
  const [lastName, setLastName] = useState(store.lastName);
  const updateStore = useUpdate();

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    console.log('here');
    e.preventDefault();

    console.log(firstName, lastName);

    updateStore({ firstName, lastName });
  };

  const stringifiedStore = JSON.stringify(store, null, 2);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <button>Submit</button>
      </form>
      <pre>{stringifiedStore}</pre>
    </div>
  );
};

export default Main;
