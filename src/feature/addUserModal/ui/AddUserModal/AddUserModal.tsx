import { classNames } from '../../../../shared/classNames/classNames';
import AddUserForm from '../AddUserForm/AddUserForm';
import { Modal } from '../../../../shared/ui/Modal/Modal';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AddUserModal = ({
    className,
    isOpen,
    onClose,
}: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <AddUserForm onClose={onClose} />
    </Modal>
);
