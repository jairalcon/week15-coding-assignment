import React from "react";

export const Make = (props) => {
    const { make, updateMake } = props;

    const deleteVehicle = (vehicleId) => {
        // assigning new variable to object
        const updatedMake = {
            // spread make component, keeping values from the make
            ...make,
            // update to different value, same array, filter out id of vehicle we're deleting
            vehicles: make.vehicles.filter((x) => x.id !== vehicleId)
        };
        // take make and send to PUT to update on API
        updateMake(updatedMake);
    }
    // spreading make, vehicles - then taking array of vehicles and adding new vehicle
    const addNewVehicle = (vehicle) => updateMake({ ...make, vehicles: [...make.vehicles, vehicle] });

    //function to check if the vehicle name is null or empty
    const checkVehicleName = (vehicle) => {
        //console.log("Shows a vehicle object:", vehicle); //Shows a vehicle object in the console

        //If the vehicle name is null or empty return an empty string
        if (vehicle === null || vehicle === "") {
            return "";
        }
        //If the vehicle name is not null or empty return the vehicle name
        else {
            return vehicle.name;
        }
    };

    //function to check if the vehicle area is null or empty
    const checkVehicleArea = (vehicle) => {
        //If the vehicle area is null or empty return an empty string
        if (vehicle === null || vehicle === "") {
            return "";
        }
        //If the vehicle area is not null or empty return the vehicle area
        else {
            return vehicle.area;
        }
    };

    const vehicles = () => (
        <ul>
            {make.vehicles.map((vehicle, index) => (
                <li key={index}>
                    <label> {`${checkVehicleName(vehicle)} Area: ${checkVehicleArea(vehicle)}`}</label>
                    <button onClick={(e) => deleteVehicle(vehicle.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{make.name}</h1>
            {
                // props that we're passing in
                vehicles({ vehicles, makeId: make.id, deleteVehicle })
            }
            {/* {console.log(vehicles)} */}
            {/* <NewVehicleForm addNewVehicle={addNewVehicle} /> */}
        </div>
    );
}