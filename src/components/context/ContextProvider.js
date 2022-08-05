// import { createContext, useState } from "react";

// export const DataContext = createContext(null);


// const DataProvider = ({children})=>{
//     const [accounts, setAccounts] = useState('')
//     return(
//             <DataContext.Provider value={{ 
//                 accounts,
//                 setAccounts}}
//                 >
//                     {children}
//             </DataContext.Provider>
//     )
// }

// export default DataProvider;

import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ accounts, setAccounts ] = useState('');
    
    return (
        <LoginContext.Provider value={{ accounts, setAccounts }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;