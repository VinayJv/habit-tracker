import { createContext,useState,useContext } from "react";

const DataContext = createContext(null);

export function ContextWrapper({ children }) {
    const [habitsData, sethabitsData] = useState([]);
    
    return (
        <DataContext.Provider value={{habitsData, sethabitsData}}>
          {children}
        </DataContext.Provider>
      );
}

export const useDataContext = () => useContext(DataContext);