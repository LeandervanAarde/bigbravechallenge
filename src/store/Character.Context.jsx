import dayjs, { Dayjs } from "dayjs";
import { createContext, useContext, useState } from "react";

const defaultValues = {
  name: "",
  surname: "",
  sex: "",
  dateOfBirth: dayjs(Date.now()),
  favoriteColor: "#ffffff",
  occupation: "",
  occupationString: "",
  headImage: "",
};

export const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [characterValues, setCharacterValues] = useState(defaultValues);

  const updateValues = (name, value) => {
    setCharacterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(characterValues);
  };

  const clearContext = () => {
    setCharacterValues(defaultValues);
}



  const contextValue = {
    characterValues,
    updateValues,
    clearContext
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
}
