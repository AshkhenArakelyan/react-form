import React from "react";

const InputPassword = ({password, handleChangeInput}) => {
    return (
        <input type="password" placeholder="Password" name='password' value={password}  onChange={(event) => handleChangeInput(event)}/>
    );
}

export default InputPassword