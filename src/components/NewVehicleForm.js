import React, { useState } from 'react';

export const NewVehicleForm = (props) => {
    // using hooks
    const [model, setmodel] = useState('');
    const [year, setYear] = useState(undefined);
    const [moneyOwed, setMoneyOwed] = useState(false);

    // making sure input is a number
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({ name, area });
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    }


    return (
        <div>
            <h4>Add a new Room</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='name' //model
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='name' //year
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='area'
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
};