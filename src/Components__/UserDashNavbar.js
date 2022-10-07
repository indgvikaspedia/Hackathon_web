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
import { Link } from 'react-router-dom';


export default class UserDashNavbar extends React.Component {
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
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand className='border border-light p-2 rounded' href="/"><img src={AKAM} width={"100px"} alt="AKAM" /></NavbarBrand>

                    <NavbarToggler className='bg-white mr-3' onClick={this.toggle} />

                    <Collapse color='white' isOpen={this.state.isOpen} navbar>

                        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                            <NavItem>
                                <NavLink className='text-white Nav_hover' href="#"><b>Projects</b></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='text-white Nav_hover' href="UserProfile"><b>Profile</b></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className='text-white Nav_hover' href="UpdateUser"><b>Update Profile</b></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="#">
                                    <Link to={"/Logout"}><Button className='btn btn-sm btn-danger font-weight-bold'>Logout</Button></Link>
                                </NavLink> 
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}