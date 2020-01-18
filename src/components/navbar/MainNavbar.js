import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const MainNavbar = () => {
    return (
        <>
            <Navbar bg="danger" variant="dark" className='h-7'>
            </Navbar>
            <Navbar bg="light" variant="dark" className='h-18'>
                <Navbar.Brand href="#home" style={{ color: '#dc3545' }}>Datengaja</Navbar.Brand>
                <Nav className="mr-auto">
                    <div className='w-90 ml-90'>
                        <FormControl type="text" placeholder="Cari Vendor Pernikahanmu" />
                    </div>
                </Nav>
                <Form inline>
                    <Button variant="outline-danger">Masuk</Button>
                    <Button variant="danger" className='ml-2'>Daftar</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default MainNavbar
