import React, { useRef } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid'

export default function Login({onIdSubmit}) {
    const idRef = useRef()

    function handleSubmit (e){
        e.preventDefault()
        console.log('entrooo',idRef.current)
        onIdSubmit(idRef.current.value)
    }

    function createNewId(){
        onIdSubmit(uuidv4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height: '100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group className="mb-4">
                <Form.Label> Enter your Id</Form.Label>
                <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" style={{marginRight:'1rem'}}>Login </Button>
                <Button variant="secondary" onClick={createNewId}>Create a new ID </Button>
            </Form>
        </Container>
    )
}
