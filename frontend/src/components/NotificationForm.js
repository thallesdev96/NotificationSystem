import React, { useState } from 'react';
import axios from 'axios';

const NotificationForm = () => {
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) {
            alert('Message cannot be empty');
            return;
        }

        try {
            await axios.post('http://localhost:3000/api/notifications/send', { category, message });
            alert('Notification sent successfully');
        } catch (error) {
            console.error('Error sending notification', error);
            alert('Failed to send notification');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Sports">Sports</option>
                    <option value="Finance">Finance</option>
                    <option value="Movies">Movies</option>
                </select>
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </label>
            <button type="submit">Send Notification</button>
        </form>
    );
};

export default NotificationForm;
