import React,{ useState } from "react";
import ContextAPi from './contextapi';

export const productContext = React.createContext();

const Context =() => {

    const [emp, setEmp] = useState({
        id:'1',
        name:"dolphin",
        location:'ahemdabad'
      })

    return (
        <>
        <div>
            <p> this the contextApi is </p>
            <productContext.Provider  value={emp} >
                <ContextAPi />
            </productContext.Provider>
        </div>
        </>

    );

};

export default Context;