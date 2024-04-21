
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

function ShowAlert({ message }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <Alert severity="success" onClose={handleClose}>
                    {message}
                </Alert>
            )}
        </>
    );
}

export default ShowAlert;
