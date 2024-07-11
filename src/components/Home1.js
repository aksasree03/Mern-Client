import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = () => {
        if (name.trim() !== '') {
            const newData = [...data, { id: Date.now(), name }];
            setData(newData);
            setName('');
        }
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return (
        <div>
            <h2>Submit Data</h2>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <h2>Submitted Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
