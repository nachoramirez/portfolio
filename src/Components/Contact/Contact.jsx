import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

import {
  ContactContainter,
  Title,
  Form,
  Input,
  TextArea,
  SubmitButton,
  Alert,
} from './Contact'

import { useObserver } from '../../hooks/useObserver'

const Contact = () => {
  const [successAlert, setSuccessAlert] = useState(false)
  const [form, setForm] = useState({})
  const Ref = useRef()

  const isVisible = useObserver(Ref)

  const handleSubmit = (event) => {
    event.preventDefault()
    // emailjs
    //   .send('service_i8brmzu', 'template_ic14ipk', form, 'hiy_eRcAXlNbAp_Ai')
    //   .then(setSuccessAlert(true))
    //   .then(setTimeout(() => setSuccessAlert(false), 2000))
    //   .catch((err) => console.error(err))

    event.target.reset()
  }

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <ContactContainter isVisible={isVisible}>
      <Title ref={Ref}>Contact me</Title>
      <h1> get in touch</h1>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Name" name="name" onChange={handleForm} required />
        <Input
          placeholder="Email"
          onChange={handleForm}
          type="email"
          name="email"
          required
        />
        <TextArea
          onChange={handleForm}
          height="80%"
          type="text"
          name="message"
          placeholder="Your message..."
          required
        />
        <SubmitButton> Submit</SubmitButton>
      </Form>
      <Alert show={successAlert}>
        <h1> The email has been sent successfully</h1>
      </Alert>
    </ContactContainter>
  )
}

export default Contact
