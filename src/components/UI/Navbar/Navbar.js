import React from "react";
import styled from "styled-components";

import logo from "../../../img/ui-icons/company-icon.png"

const Styles = styled.nav`

    background-color: var(--main-darkblue);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    .company-logo {
        width: 50px;
        height: 100%;
    }

    .nav-links {
        text-decoration: none;
        list-style: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .nav-link {
        text-decoration: none;
        text-transform: capitalize;
        padding: 5px;
        margin: 0 20px;
        font-size: 18px;
        color: var(--main-red);
        transition: all .4s ease-in-out;
    }
    
    .nav-link::last-child {
        margin: 0;
    }

    .nav-link.active {
        border-bottom: 1px solid var(--main-light);
    }

    .nav-link:hover {
        color: var(--main-light);
    }

    @media screen and (min-width: 600px) {
        .nav-link {
            margin: 0 40px;
            font-size: 24px;
        }
    }

`;

const Navbar = (props) => {
    
    return (
        <Styles>
            <a href="/"><img    className="company-logo" 
                    src={logo} 
                    alt="Cars Logo" />
            </a>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">home</a></li>
                <li><a href="/" className="nav-link">about</a></li>
                <li><a href="/" className="nav-link">cars</a></li>
            </ul>

        </Styles>
    )
} 

export default Navbar;