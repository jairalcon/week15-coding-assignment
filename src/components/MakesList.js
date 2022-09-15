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

    deleteMake = async (deletedMake) => {
        await makesApi.delete(deletedMake);
        this.fetchMakes();
    }

    addMake = async (addedMake) => {
        await makesApi.post(addedMake);
        this.fetchMakes();
    }

    render() {
        return (
            <div className="make-list">
                <NewMakeForm addMake={this.addMake}/>
                {this.state.makes.map((make) => (
                    <Make
                        make={make}
                        key={make.id}
                        updateMake={this.updateMake}
                    />
                ))}
                {/* {console.log(<Make />)} */}
                {/* <button onClick={(e) => deleteMake(make.id)}>Delete</button> */}
            </div>
        )
    }
}