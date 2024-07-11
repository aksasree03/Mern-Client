import React, { useState } from 'react';
export default function Feedback(){
    const[formData, SubmitFormData]= useState({
        name:"",
        roll:"",
        feedback:""
    })
    const [table, SubmitTable]= useState([])
    function HandleChange(e){
        const{name,value}=e.target
        SubmitFormData({...formData,[name]:value});
    }
    function handleSubmit(){
        SubmitTable([...table,formData])
        SubmitFormData({name:"",
            roll:"",
            feedback:""
        })
    }
    return(
        <div>
            <input type="text"
            name="name"
            value={formData.name}
            onChange={HandleChange}
            placeholder="Name"
            />
             <input type="text"
            name="roll"
            value={formData.roll}
            onChange={HandleChange}
            placeholder="Roll Name"
            />
             <input type="text"
            name="feedback"
            value={formData.feedback}
            onChange={HandleChange}
            placeholder="your feedback"
            />
            <button onClick={handleSubmit} > Submit</button>
            <table>
                <tr>
                    <th>name</th>
                    <th>roll</th>
                    <th>feedback</th>
                </tr>
            </table>
            <tbody>
                {table.map ((key,index)=>(
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.roll}</td>
                        <td>{key.feedback}</td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </div>
    )
}