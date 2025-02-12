import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TelegramBot() {

    const token = "7163977379:AAGhNXdCJK6bQE_sJtxvuZrcG7KFuRA3DGM"
    const botid = "1896479864"

    //modal js
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [tanlash, setTanlash] = useState("")
    const [vaqt, setVaqt] = useState("")

    const yuborish = (e) => {
        e.preventDefault()

        const xabar = `
            ism:${name}
            email:${email}  
            tanlash:${tanlash}
            time:${vaqt}
        `

        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id:botid,
                text: xabar
            })
        })
        .then((response) => response.json())
        .then(res => {
            if (res.ok) {
                handleShow()
                setname("")
                setEmail("")
                setTanlash("")
                setVaqt("")
            }
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    return (
        <Form>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>malumot jonatildi</Modal.Title>
        </Modal.Header>
        <Modal.Body>malumot jonatildi  men seni topaman</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name *</Form.Label>
                <Form.Control required value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Full Name *" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email *</Form.Label>
                <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Departament *</Form.Label>
                <Form.Control required value={tanlash} onChange={(e) => setTanlash(e.target.value)} type="text" placeholder="Place select" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Time *</Form.Label>
                <Form.Control required value={vaqt} onChange={(e) => setVaqt(e.target.value)} type="number" placeholder="4:00 aviable" />
            </Form.Group>

            <button onClick={(e) => yuborish(e)} className='btn btn-primary w-100'>Send</button>
        </Form>
    )
}

export default TelegramBot
