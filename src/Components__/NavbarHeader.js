import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import AKAM from '../Images/AKAM.png';
import '../App.css';



export default class NavbarHeader extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (

            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/"><img className='border border-light p-2 rounded' src={AKAM} width={"100px"} height={"100px"} alt="AKAM" /> </NavbarBrand>

                <NavbarToggler className='bg-white' onClick={this.toggle} />

                <Collapse className='text-white' isOpen={this.state.isOpen} navbar>

                    <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                        <NavItem>
                            <NavLink href="Register"><Button className='btn btn-danger'>Sign Up</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Login"><Button className='btn btn-success'>Sign In</Button></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>

        );
    }
}