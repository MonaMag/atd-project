import { classNames } from '../../../../shared/classNames/classNames';
import { Modal } from '../../../../shared/ui/Modal/Modal';
import AddUserForm from '../AddUserForm/AddUserForm';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import React, { useCallback, useState } from 'react';

interface UserModalProps {
  className?: string;
}

export const AddUserModal = ({ className }: UserModalProps) => {
  const [isCreateModal, setIsCreateModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsCreateModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsCreateModal(false);
  }, []);

  return (
    <>
      <Button theme={ButtonTheme.BACKGROUND} onClick={onShowModal}>
        Создать
      </Button>
      {isCreateModal && (
        <Modal
          className={classNames('', {}, [className])}
          isOpen={isCreateModal}
          onClose={onCloseModal}
        >
          <AddUserForm onClose={onCloseModal} />
        </Modal>
      )}
    </>
  );
};
