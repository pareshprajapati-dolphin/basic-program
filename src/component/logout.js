import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from './redux/actions/index';

 const Logout = () => {
    //console.log("the logout page ");

    const history = useHistory();

    const dispatch = useDispatch();

    const handleClick =() =>{
        dispatch(signOut());
        history.push("/login")
    }

return (
    
<>
    <div className="container-fluid">
        <p> this the logout page </p>
        <button onClick ={ handleClick}> logout</button>
    </div>
    </>

    )
}

export default Logout;
