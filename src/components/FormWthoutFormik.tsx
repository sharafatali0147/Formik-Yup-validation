import React, { useState } from 'react'

const FormWtF: React.FC = () => {

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState("");

    const submitIsDisabled = !!emailError || !!passwordError || email.length < 1 || password.length < 1;

    const formSubitHandler = (event: any) => {
        event.preventDefault();
        console.log(`Email: ${email}. Password: ${password}`);
        
     };

    const emailOnChangeHandler = (event: any) => {
        const input = event.target.value;
        setEmail(input);
    };

    const emailOnBlurHandler = () => {
         if (!email.length) {
            setEmailError("This field is required!");
        }else if (!emailRegex.test(email)) {
            setEmailError("Type valid email");
        } else {
            setEmailError("");
        }
    }
    
    const passwordOnChangeHandler = (event: any) => {
        const input = event.target.value;
        setPassword(input);
    };

    const passwordOnBlurHandler = () => {
         if (!password.length) {
            setPasswordError("This field is required!");
        } else if (password.length < 8) {
            setPasswordError("Password must be at least 8 charactes!");
        } else {
            setPasswordError("");
        }
    }

    const resetHandler = () => {
        setEmail('');
        setEmailError('');
        setPassword('');
        setPasswordError('');
    };

    return (
        <div>
            <form onSubmit={formSubitHandler}>
                <div>
                    <label htmlFor="email" >Email: </label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="email"
                        value={email}
                        onChange={emailOnChangeHandler}
                        onBlur={emailOnBlurHandler}
                    />
                    <span>{emailError}</span>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        autoComplete="off"
                        type="text"
                        name="password"
                        value={password}
                        onChange={passwordOnChangeHandler}
                        onBlur={passwordOnBlurHandler}
                    />
                    <span>{passwordError}</span>
                </div>
                <button disabled={submitIsDisabled} type="submit">Submit</button>
                <button onClick={resetHandler}>Reset</button>
            </form>
        </div>
    )
};

export default FormWtF
