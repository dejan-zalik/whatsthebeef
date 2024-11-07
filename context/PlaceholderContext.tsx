import { createContext, useState } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  showPlaceholder: boolean;
  setShowPlaceholder: React.Dispatch<React.SetStateAction<boolean>>;
};

const contextStateType = {
  showPlaceholder: false,
  setShowPlaceholder: () => false,
};

const PlaceholderContext = createContext<ContextType>(contextStateType);

const PlaceholderContextProvider = ({ children }: ProviderProps) => {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(false);
  return (
    <PlaceholderContext.Provider
      value={{ showPlaceholder, setShowPlaceholder }}
    >
      {children}
    </PlaceholderContext.Provider>
  );
};

export { PlaceholderContext, PlaceholderContextProvider };
