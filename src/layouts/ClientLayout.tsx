import React, { useContext } from "react";
import {Outlet} from 'react-router-dom'
import styled from "styled-components";
import Footer from "../componets/footer";
import Header from "../componets/header";


const ClientLayout = (props: any) => {
    return (
        <Container>
            <Header/>
            <Outlet/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${props => props.theme == "dark" ? "#001529" : "white"};
    min-height: 100vh
`

export default ClientLayout

