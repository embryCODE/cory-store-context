import React, { useContext, useState } from 'react';

// Store type and initial state
interface Store {
  firstName: string;
  lastName: string;
}

const initialStore: Store = {
  firstName: 'Cory',
  lastName: 'Harkins',
};

// Create a context to deliver the store itself
const StoreContext = React.createContext((undefined as unknown) as Store);
const StoreProvider = StoreContext.Provider;
const useStore = () => {
  const store = useContext(StoreContext);

  if (store === undefined) {
    throw new Error(
      'You must specify a store. You probably forgot the provider.'
    );
  }

  return store;
};

// Create a context to deliver the store updater function
const UpdateContext = React.createContext<
  (partialStore: Partial<Store>) => void
>(() => {
  throw new Error(
    'You must specify an updater function. You probably forgot the provider.'
  );
});
const UpdateProvider = UpdateContext.Provider;
const useUpdate = () => useContext(UpdateContext);

const StoreAndUpdateProviders: React.FC = props => {
  const [store, setStore] = useState(initialStore);

  const updateStore = (partialStore: Partial<Store>) => {
    setStore((s: Store) => {
      return {
        ...s,
        ...partialStore,
      };
    });
  };

  return (
    <StoreProvider value={store}>
      <UpdateProvider value={updateStore}>{props.children}</UpdateProvider>
    </StoreProvider>
  );
};

export { StoreAndUpdateProviders, useStore, useUpdate };
