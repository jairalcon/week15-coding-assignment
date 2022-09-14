import React from "react";
import { Make } from "./Make";
import { makesApi } from "../rest/VehiclesApi";

export class MakesList extends React.Component {
    state = {
        makes: []
    };

    componentDidMount() {
        this.fetchMakes();
    };

    fetchMakes = async () => {
        const makes = await makesApi.get();
        this.setState({ makes });
    };

    updateMake = async (updatedMake) => {
        await makesApi.put(updatedMake);
        this.fetchMakes();
    };

    render() {
        return (
            <div className="make-list">
                {this.state.makes.map((make) => (
                    <Make
                        make={make}
                        key={make.id}
                        updateMake={this.updateMake}
                    />
                ))}
                {/* <NewVehicleForm /> */}
            </div>
        )
    }
}