import React, { createContext, useContext, useEffect, useState } from 'react';

const CharacterCreationContext = createContext();

export const useCharacterCreation = () => useContext(CharacterCreationContext);

export const CharacterCreationProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState(() => {
    const localData = localStorage.getItem('characterData');
    return localData ? JSON.parse(localData) : {};
  });
  const [currentStep, setCurrentStep] = useState(() => {
    const localStep = localStorage.getItem('currentStep');
    return localStep ? parseInt(localStep, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem('characterData', JSON.stringify(characterData));
    localStorage.setItem('currentStep', currentStep.toString());
  }, [characterData, currentStep]);

  const updateCharacterData = (updates) => {
    setCharacterData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep > 1 ? currentStep - 1 : 1);

  return (
    <CharacterCreationContext.Provider value={{ characterData, updateCharacterData, currentStep, nextStep, prevStep }}>
      {children}
    </CharacterCreationContext.Provider>
  );
};
