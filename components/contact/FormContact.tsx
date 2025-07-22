'use client'

import React, { useState } from 'react'

export default function FormContact() {
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    const ACCESS_TOKEN_KEY = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN

    const [form, setForm] = useState({
        name: '',
        email: '',
        telegram: '',
        telegramUsername: '',
        message: '',
    })

    const [popupMessage, setPopupMessage] = useState<string | null>(null)
    const [showPopup, setShowPopup] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!form.email && !form.telegramUsername) {
            setPopupMessage("⚠️ Please provide at least your Email or Telegram Username.")
            setShowPopup(true)
            return
        }

        const text = `
📥 New Contact Submission:

👤 Name: ${form.name}
📧 Email: ${form.email}
📱 Phone Number: ${form.telegram}
🔗 Telegram Username: ${form.telegramUsername}
📝 Message: ${form.message}
        `

        try {
            await fetch(`https://api.telegram.org/bot${ACCESS_TOKEN_KEY}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'Markdown',
                }),
            })

            setPopupMessage('✅ Your information has been sent. We will contact you soon!')
            setForm({
                name: '',
                email: '',
                telegram: '',
                telegramUsername: '',
                message: '',
            })
        } catch (error) {
            setPopupMessage('❌ Failed to send your message. Please try again later.')
            console.error(error)
        }

        setShowPopup(true)
    }

    const handleClosePopup = () => {
        setIsClosing(true)
        setTimeout(() => {
            setShowPopup(false)
            setPopupMessage(null)
            setIsClosing(false)
        }, 300) // Match the animation duration
    }

    return (
        <>
            {/* Popup Modal */}
            {showPopup && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
                    <div className={`bg-white text-black rounded-lg shadow-lg p-6 max-w-sm w-full transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
                        <p className="text-center text-base font-medium">{popupMessage}</p>
                        <div className="mt-4 text-center">
                            <button
                                className="btn btn-primary"
                                onClick={handleClosePopup}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Form */}
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
                            />
                            <label htmlFor="cname">Phone Number</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control border-0"
                                id="telegramUsername"
                                placeholder="@yourusername"
                                name="telegramUsername"
                                value={form.telegramUsername}
                                onChange={handleChange}
                            />
                            <label htmlFor="telegramUsername">Telegram Username</label>
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
                            <label htmlFor="message">I want to know about your course</label>
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
