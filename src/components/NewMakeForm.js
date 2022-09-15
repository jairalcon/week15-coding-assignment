import React, { useState } from 'react';

export const NewMakeForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        console.log('inside NewMakeForm, onsubmit()');
        e.preventDefault();
        if (name) {
            console.log('New Make Make: ' + name);
            console.log('props: ', props);

            props.addMake({ name });
            setName('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add New Make </h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Name of New Make'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button type='submit'>Add Vehicle Make</button>
            </form>
        </div>
    )
};
