import { createContext, useContext, useState } from 'react';

const TemperatureUnitContext = createContext();

export const TemperatureUnitProvider = ({ children }) => {
  const [unit, setUnit] = useState('C'); // 'C' o 'F'

  const toggleUnit = () => {
    setUnit(prev => (prev === 'C' ? 'F' : 'C'));
  };

  return (
    <TemperatureUnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
};

export const useTemperatureUnit = () => useContext(TemperatureUnitContext);