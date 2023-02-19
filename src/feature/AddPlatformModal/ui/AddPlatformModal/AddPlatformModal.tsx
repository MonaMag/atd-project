import React, { useCallback, useState } from 'react';
import { Modal } from '../../../../shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import { classNames } from '../../../../shared/classNames/classNames';
import cls from '../../../delegation/DelegationForm.module.css';
import { PlusCircleOutlined } from '@ant-design/icons';
import { AddPlatformForm } from '../AddPlatformForm/AddPlatformForm';

interface AddPlatformModalProps {
  className?: string;
}

export const AddPlatformModal = ({ className }: AddPlatformModalProps) => {
  const [isCreateModal, setIsCreateModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsCreateModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsCreateModal(false);
  }, []);

  return (
    <>
      <Button theme={ButtonTheme.BACKGROUND} className={cls.headerButton} onClick={onShowModal}>
        <PlusCircleOutlined className={cls.addIcon} />
        Добавить
      </Button>
      {isCreateModal && (
        <Modal
          className={classNames('', {}, [className])}
          isOpen={isCreateModal}
          onClose={onCloseModal}
        >
          <AddPlatformForm onClose={onCloseModal} />
        </Modal>
      )}
    </>
  );
};
