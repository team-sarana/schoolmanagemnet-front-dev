"use client"
import React, { useState } from 'react'

export default function FormContact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        telegram: '',
        course: '',
        message: '',
    })

    const CHAT_ID = '-1002539478962'
    const ACCESS_TOKEN_KEY = '7950797486:AAFFDF-q5vii9GnGB5-17QJ5eACgLhMmbiM'

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const text = `
    📥 New Contact Submission:
    
    👤 Name: ${form.name}
    📧 Email: ${form.email}
    📱 Telegram: ${form.telegram}
    📚 Course: ${form.course}
    📝 Message: ${form.message}
            `
        try {
            await fetch(`https://api.telegram.org/bot${ACCESS_TOKEN_KEY}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            })
            alert('Your message has been sent successfully!')
            setForm({ name: '', email: '', telegram: '', course: '', message: '' })
        } catch (error) {
            alert('Failed to send message.')
            console.error(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control border-0"
                                id="gname"
                                placeholder="Your Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="gname">Your Name</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control border-0"
                                id="gmail"
                                placeholder="Your Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="gmail">Your Email</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control border-0"
                                id="cname"
                                placeholder="Telegram Number"
                                name="telegram"
                                value={form.telegram}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="cname">Telegram Number</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control border-0"
                                id="cage"
                                placeholder="Course"
                                name="course"
                                value={form.course}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="cage">Courses</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control border-0"
                                placeholder="Leave a message here"
                                id="message"
                                name="message"
                                style={{ height: 100 }}
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-dark w-100 py-3" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
