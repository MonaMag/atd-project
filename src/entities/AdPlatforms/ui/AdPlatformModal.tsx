import React, { useCallback, useState } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { AdPlatformForm } from './AdPlatformForm/AdPlatformForm';
import { Button, ButtonTheme } from '../../../shared/ui/Button/Button';
import { classNames } from '../../../shared/classNames/classNames';
import cls from '../../../feature/delegation/DelegationForm.module.css';
import { PlusCircleOutlined } from '@ant-design/icons';

interface AdPlatformModalProps {
    className?: string;
}

export const AdPlatformModal = ({ className }: AdPlatformModalProps) => {
    const [isCreateModal, setIsCreateModal] = useState(false);

    const onShowModal = useCallback(() => {
        setIsCreateModal(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsCreateModal(false);
    }, []);

    return (
        <>
            {/*<Button theme={ButtonTheme.BACKGROUND} onClick={onShowModal}>
                Добавить
            </Button>*/}
            <Button
                theme={ButtonTheme.BACKGROUND}
                className={cls.headerButton}
                onClick={onShowModal}
            >
                <PlusCircleOutlined className={cls.addIcon} />
                Добавить
            </Button>
            <Modal
                className={classNames('', {}, [className])}
                isOpen={isCreateModal}
                onClose={onCloseModal}
            >
                <AdPlatformForm onClose={onCloseModal} />
            </Modal>
        </>
    );
};
