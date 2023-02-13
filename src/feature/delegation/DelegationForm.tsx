import React from 'react';
import { CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, ButtonTheme } from '../../shared/ui/Button/Button';
import cls from './DelegationForm.module.css';

interface DelegationFormProps {
    className?: string;
    onClose: () => void;
}

export const DelegationForm = ({ className, onClose }: DelegationFormProps) => {
    return (
        <div className={cls.delegationForm}>
            <div className={cls.headerWrapper}>
                <div className={cls.headerContent}>
                    <span className={cls.headerText}>
                        Аккаунты рекламных площадок
                    </span>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        className={cls.headerButton}
                    >
                        <PlusCircleOutlined className={cls.addIcon} />
                        Добавить
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.headerButton}
                    >
                        Делегировать
                    </Button>
                </div>
                <div className={cls.closeIcon}>
                    <CloseOutlined onClick={onClose} />
                </div>
            </div>

            <div className={cls.descriptionList}>Таблица</div>
        </div>
    );
};
