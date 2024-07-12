"use client";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const SimpleModal = ({ onClose }: any) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'white', padding: '20px' }}>
                <h2>Test Modal</h2>
                <button>Close</button>
            </div>
        </div>,
        document.body
    );
};

export default SimpleModal;
