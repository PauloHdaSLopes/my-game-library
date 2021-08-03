import React from 'react';
import { Input, Label, HelperText } from "../../../Components/UI"

const TextField = ({inputName, inputType, hasError, labelText, handleText, validationText}) => {
    return (
        <>
            <Label htmlFor={labelText}>{labelText}</Label>
            <Input hasError={hasError} name={inputName} type={inputType} onChange={handleText}/>
            <HelperText>{validationText}</HelperText>
        </>
    )
}

export default TextField