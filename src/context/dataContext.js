import { createContext,useState,useContext } from "react";

const DataContext = createContext(null);

export function ContextWrapper({ children }) {
    const [habitsData, sethabitsData] = useState([]);
    const [archive,setArchive] = useState([]);
    
    return (
        <DataContext.Provider value={{habitsData, sethabitsData, archive, setArchive}}>
          {children}
        </DataContext.Provider>
      );
}

export const useDataContext = () => useContext(DataContext);