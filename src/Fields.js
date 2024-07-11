import React from "react";
import { useForm } from "./FormContext";

function Fields({ fieldName, fieldType }) {
    const { form, setForm } = useForm();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={fieldName}>
                {fieldName}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                name={fieldName}
                type={fieldType}
                value={form[fieldName]}
                onChange={handleChange}
                placeholder={`Enter your ${fieldName}`}
            />
        </div>
    );
}

export default Fields;