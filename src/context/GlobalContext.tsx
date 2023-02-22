import React, { useState, createContext } from "react";
import { Size } from "../utils/types";

interface GlobalProviderProps {
  children: React.ReactNode
}

export const GlobalContext = createContext({
  modalOn: false,
  setModalOn: (modalOn: boolean) => { },

  invitees: 0,
  setInvitees: (invitees: number) => { },

  duration: 4,
  setDuration: (duration: number) => { },

  preferences: 50,
  setPreferences: (preferences: number) => { },

  level: 2,
  setLevel: (level: number) => { },

  myBeer: '',
  setMyBeer: (myBeer: string) => { },

  size: '',
  setSize: (size: string) => { },

});

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [invitees, setInvitees] = useState(0);
  const [duration, setDuration] = useState(4);
  const [preferences, setPreferences] = useState(0.50);
  const [level, setLevel] = useState(2);
  const [myBeer, setMyBeer] = useState('');
  const [size, setSize] = useState('');

  return (
    <GlobalContext.Provider value={{
      modalOn,
      setModalOn,
      invitees,
      setInvitees,
      duration,
      setDuration,
      preferences,
      setPreferences,
      level,
      setLevel,
      myBeer,
      setMyBeer,
      size,
      setSize
    }}>
      {children}
    </GlobalContext.Provider>
  );
};