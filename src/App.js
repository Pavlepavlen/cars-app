import React, { Component } from 'react';
import styled from "styled-components";

import Navbar from "./components/UI/Navbar/Navbar";
import CarsList from "./components/Cars/CarsList/CarsList";

const Styles = styled.main`


`;


class App extends Component {

  render() {

    return (
      <Styles>
        <Navbar />
        <CarsList />
      </Styles>
    )
  }
}

export default App;
