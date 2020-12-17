import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

function Buy(props) {
    return(
        <div class="container">
<div className="row justify-content-center">             
                <div className="col-auto">
                    
                </div>
                </div>


                <Link to="/chat"><Button id="buyprd"> Start Chat</Button></Link>
                </div>
    )

}

export default Buy;