import { useState } from 'react';

export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);
    const [idbook, setIdbook] = useState(null);

    const openModal = (id) => {
        setIsOpen(true)
        setIdbook(id);
        
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return [ idbook, isOpen, openModal, closeModal ];
}