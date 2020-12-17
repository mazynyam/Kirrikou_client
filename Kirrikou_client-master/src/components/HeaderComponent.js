import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { Link } from 'react-router-dom';
    import Shops from './ShopsComponent.js';
    import Sell from './SellProductComponent.js';

class Header extends Component {


    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
      
this.toggleNav=this.toggleNav.bind(this);
this.toggleModal = this.toggleModal.bind(this);
this.handleLogin = this.handleLogin.bind(this);
    }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
      
    render() {
        return(
            <div>
<div class="container-fluid">
  
  <div class="row" id="fsrow">
  <img id="pic"src='./assets/KIRIKOU LOGO 2.jpg' height="30" width="41" alt='Kiriikou.com' />
 <Button id="categ" className=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><span className="fa fa-list-alt fa-lg" ></span> Categories</Button>
 
  
    
  <input id="SearchPrd" size="50" placeholder="Type your search here" type="text"/>
            
<Button id="fsearch"> <span className="fa fa-search fa-lg"></span> </Button>

<Link to="/shops"><Button id="shp"> Shops</Button></Link>
  <Button id="ord" onClick={this.toggleModal}><span className="fa fa-shopping-cart fa-lg"></span> Place an order</Button>
                                    
  <Link to="/sell"><Button id="conn">Connect on Kiriikou </Button></Link>
    
<Button id="logg"onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                    


</div>



  </div>

        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                
           </div>
        );
    }
}
export default Header;
