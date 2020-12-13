import React, {createContext, useState, useContext} from 'react';

const PeopleContext = createContext();

export default function PeopleProvider({children}) {
  const [peoples, setPeoples] = useState([]);

  return (
    <PeopleContext.Provider
      value={{
        peoples,
        setPeoples,
      }}>
      {children}
    </PeopleContext.Provider>
  );
}

export function usePeoples() {
  const context = useContext(PeopleContext);

  if (!context) {
    throw new Error('usePeoples must be user within a PeopleProvider!');
  }

  const {peoples, setPeoples} = context;
  return {peoples, setPeoples};
}
