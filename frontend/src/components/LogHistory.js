import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LogHistory = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/notifications/logs');
            setLogs(response.data);
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <div className="log-history">
            <h2>Log History</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {formatTimestamp(log.timestamp)} - {log.notificationType} to : {log.category} by {log.user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogHistory;
