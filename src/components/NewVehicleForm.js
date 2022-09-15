import React, { useState } from 'react';

export const NewVehicleForm = (props) => {
    // using hooks
    const [model, setModel] = useState('');
    const [year, setYear] = useState(undefined);

    // making sure input is a number
    const handleYearInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setYear(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (model && year) {
            console.log('New Vehicle: ', model, year);
            console.log('new vehicle form', props)
            props.addNewVehicle({ model, year });
            setModel('');
            setYear('');
        } else {
            console.log('invalid input');
        }
    }


    return (
        <div>
            <h4>Add new vehicle:</h4>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='model' //model
                    onChange={(e) => setModel(e.target.value)}
                    value={model}
                />
                <input
                    type='text'
                    placeholder='year' //year
                    onChange={handleYearInput}
                    value={year}
                />
                <button type='submit'>Add Vehicle</button>
            </form>
        </div>
    )
};