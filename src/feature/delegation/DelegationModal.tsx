import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';
import { classNames } from '../../shared/classNames/classNames';
import { DelegationForm } from './DelegationForm';

interface DelegationModalProps {
    className?: string;
}

export const DelegationModal = ({ className }: DelegationModalProps) => {
    const [isCreateModal, setIsCreateModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsCreateModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsCreateModal(false);
    }, []);

    const handleDelegation = () => {
        console.log('Delegation');
        onShowModal();
    };
    return (
        <>
            <Button
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={handleDelegation}
            >
                Делегировать
            </Button>
            <Modal
                className={classNames('', {}, [className])}
                isOpen={isCreateModal}
                onClose={onCloseModal}
            >
                <DelegationForm onClose={onCloseModal} />
            </Modal>
        </>
    );
};
