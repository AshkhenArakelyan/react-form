import React from "react";

const InputUsername = ({userName, handleChangeInput}) => {

    return (
        <input type="text" placeholder="Username" name='userName' value={userName} onChange={(event) => handleChangeInput(event)}/>
    );
}

export default InputUsername