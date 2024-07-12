"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Modal from '@/components/Modal/Modal';
import { ModalConfig } from '@/components/Modal/types';
import ReactDOM from 'react-dom';

interface ModalContextType {
    showModal: (config: ModalConfig) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [modalConfig, setModalConfig] = useState<ModalConfig | null>(null);

    const showModal = (config: ModalConfig) => {
        setModalConfig(config);
    };

    const hideModal = () => {
        setModalConfig(null);
    };

    return (
        <ModalContext.Provider value={{ showModal }}>
            {children}
            {modalConfig && ReactDOM.createPortal(
                <Modal {...modalConfig} onClose={hideModal} />,
                document.getElementById('modal-root') || document.body
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
