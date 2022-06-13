import emailjs from '@emailjs/browser';
import React, { useState } from "react";

import './Contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return ({
                ...prevFormData,
                [name]: value
            })
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        emailjs.send(
            'contact_service',
            'template_klyjxgo',
            formData,
            'KEJspnPJbf3PswvTl'
        );
    }
    
    return (
        <div className='contact'>
            <h1><span className='code-font-h'>&lt;h1&gt;</span>Contact form<span className='code-font-h'>&lt;/h1&gt;</span></h1>
            <span className='code-font-h'>&lt;form&gt;</span>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    className='contact-form-input'
                    name='name'
                    required
                    onChange={handleChange}
                    value={formData.name}
                />
                <input 
                    type='email'
                    placeholder='email'
                    className='contact-form-input'
                    name='email'
                    required
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type='text'
                    placeholder='subject'
                    className='contact-form-input'
                    name='subject'
                    required
                    onChange={handleChange}
                    value={formData.subject}
                />
                <textarea
                    placeholder='message'
                    className='contact-form-textarea'
                    name='message'
                    required
                    onChange={handleChange}
                    value={formData.message}
                ></textarea>
                <button className='contact-form-submit'>Send message</button>
            </form>
            <span className='code-font-h'>&lt;/form&gt;</span>
        </div>
    );
}

export default Contact;