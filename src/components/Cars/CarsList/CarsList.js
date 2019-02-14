import React, {Component} from "react";
import styled from "styled-components";
import carsData from "../../../carsData";

import CarsItem from "./CarItem/CarsItem";

const Styles = styled.section`
        max-width: 70vw;
        width: 100%;
        margin: 0 auto;
        padding: 2rem 0;

        @media screen and (min-width: 900px) {
            display: flex;
            flex-direction: row;
            max-width: 94%;
        }
`;

class CarsList extends Component {

    state = {
        cars: carsData
    }

    deleteItemHandler = (id) => {

        const carsCopy = this.state.cars;

        const filteredCars = carsCopy.filter((item) => {
            return item.id !== id;
        });

        this.setState({
            cars: filteredCars
        });
    }

    render () {

        const { cars } = this.state;

        const carsList = cars.map( item => {
            return <CarsItem    key={item.id}
                                id={item.id} 
                                company={item.company} 
                                model={item.model} 
                                info={item.info} 
                                logo={item.logo}
                                img={item.img}
                                click={this.deleteItemHandler} />
        })

        return (
            <Styles>
                {carsList}
            </Styles>
        )
    }
}

export default CarsList;