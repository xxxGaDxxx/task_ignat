import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from './RequestsAPI';


const Request = () => {

    const [checkInput, setCheckInput] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckInput(e.currentTarget.checked)
    }
    const onClickButton = () => {
        RequestAPI.requestServer(checkInput)
            .then(response => {
                setText(response.data.errorText)
            })
            .catch(error => {
                setText(error.response.data.errorText)
            })
    }

    return (
        <div>
            <div>
                <button onClick={onClickButton}>Request</button>
            </div>
            <div>
                <input type="checkbox" checked={checkInput} onChange={onChangeInput}/> check
            </div>
            {text}
        </div>

    );
};

export default Request;