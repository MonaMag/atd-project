import { classNames } from '../../../../shared/classNames/classNames';
import { Modal } from '../../../../shared/ui/Modal/Modal';
import AddUserForm from '../AddUserForm/AddUserForm';

interface UserModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AddUserModal = ({
    className,
    isOpen,
    onClose,
}: UserModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
    >
        <AddUserForm onClose={onClose} />
    </Modal>
);
