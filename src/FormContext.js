import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
    const [form, setForm] = useState({
        Name: "",
        Age: "",
        Username: "",
        Password: "",
    });
    const [loginForm, setLoginForm] = useState({
        Username: "",
        Password: ""
    });
    const [localDB, setDB] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    function handleRegisterSubmit() {
        setDB([...localDB, form]);
        setForm({
            Name: "",
            Age: "",
            Username: "",
            Password: ""
        });
    }

    function handleLoginSubmit() {
        const user = localDB.find(
            user => user.Username === loginForm.Username && user.Password === loginForm.Password
        );
        if (user) {
            alert("Login successful");
            setIsLoggedIn(true);
            setCurrentUser(user);
        } else {
            alert("Invalid username or password");
        }
        setLoginForm({
            Username: "",
            Password: ""
        });
    }

    return (
        <FormContext.Provider value={{
            form, setForm, loginForm, setLoginForm, localDB, handleRegisterSubmit, handleLoginSubmit, isLoggedIn, currentUser
        }}>
            {children}
        </FormContext.Provider>
    );
}

export function useForm() {
    return useContext(FormContext);
}