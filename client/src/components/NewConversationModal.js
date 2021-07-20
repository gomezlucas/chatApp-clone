import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
import {useConversations} from '../contexts/ConversationsProvider'

export default function NewConversationModal({closeModal}) {
    const [selectedContactId, setSelectedContactId] = useState([])
    const { contacts } = useContacts()
    const {createConversation} = useConversations()
    function handleSubmit (e){
        e.preventDefault()
        createConversation(selectedContactId)
        closeModal()
    }

    function handleBoxChange(id){
        if (selectedContactId.includes(id)){
            setSelectedContactId(prevId=>(
             [...prevId.filter(prId=> prId !== id)]
            )) 
            
        }else{
            setSelectedContactId(prevId=>(
                [...prevId, id]
            ))
        }

    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>New Conversation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {JSON.stringify(selectedContactId)}
                <Form onSubmit={handleSubmit}>
                    {
                        contacts.map((contact) => (
                            <Form.Group controlId={contact.id} key={contact.id}>
                                <Form.Check
                                    type='checkbox'
                                    value={selectedContactId.includes(contact.id)}
                                    label={contact.name}
                                    onChange={()=> handleBoxChange(contact.id)}
                                    >
                                </Form.Check>
                            </Form.Group>
                    ))
                    }
                    <Button type="submit"> Create </Button>
                </Form>
            </Modal.Body>
        </>
    )
}
