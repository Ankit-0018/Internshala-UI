import { createContext, useContext, useState } from "react";
import db from "../config/db";


const mockContext = createContext();

export const MockProvider = ({children}) => {

    const [mockData , setMockData] = useState(db)

    return <mockContext.Provider value={{mockData,setMockData}}>
        {children}
    </mockContext.Provider>
}

export const useDb = () => useContext(mockContext)