import React from "react";

const TextInput = ({name, label, onChange, value, error}) => {
    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass += " has-error";
    }
    
    return (
        <div className={wrapperClass}>
            <label>{label}</label>
            <input
                type="text"
                name={name}
                className="form-control"
                value={value || ''}
                onChange={onChange}/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default TextInput;
