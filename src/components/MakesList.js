import React from "react";
import { makesApi } from "../rest/MakesApi";
import { Make } from "./Make";
import { NewMakeForm } from "./NewMakeForm";

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
                <NewMakeForm />
                {this.state.makes.map((make) => (
                    <Make
                        make={make}
                        key={make.id}
                        updateMake={this.updateMake}
                    />
                ))}
                {/* {console.log(<Make />)} */}
            </div>
        )
    }
}