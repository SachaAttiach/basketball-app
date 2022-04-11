import { createContext, useState } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Context.Provider
      value={{
        isCreating,
        setIsCreating,
        setCreateType,
        setIsEditing,
        isEditing,
        createType,
      }}
    >
      {children}
    </Context.Provider>
  );
}
