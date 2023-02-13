import React from 'react';
import { Button, ButtonSize, ButtonTheme } from '../../shared/ui/Button/Button';
import cls from './DescriptionForm.module.css';
import { CloseOutlined } from '@ant-design/icons';

interface DescriptionFormProps {
    className?: string;
    onClose: () => void;
}

export const DescriptionForm = ({
    className,
    onClose,
}: DescriptionFormProps) => {
    const handleCopyDescription = () => {};
    return (
        <div className={cls.descriptionForm}>
            <div className={cls.closeIcon}>
                <CloseOutlined onClick={onClose} />
            </div>
            <Button
                theme={ButtonTheme.BACKGROUND}
                onClick={handleCopyDescription}
                size={ButtonSize.XS}
                className={cls.descriptionCopyButton}
            >
                Скопировать аудитории
            </Button>
            <div className={cls.descriptionVolume}>Объем: 28 345 837</div>
            <div className={cls.descriptionContent}>DESCRIPTION</div>
        </div>
    );
};
