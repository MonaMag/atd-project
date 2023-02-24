import React, { useCallback, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, ButtonTheme } from '../../shared/ui/Button/Button';
import cls from './DelegationForm.module.css';
import { AddPlatformModal } from '../AddPlatformModal/ui/AddPlatformModal/AddPlatformModal';
import { PlatformList } from '../../entities/Platform/ui/PlatformList';
import { Platform } from '../../entities/Platform/model/types/platforms';

interface DelegationFormProps {
  className?: string;
  onClose: () => void;
}

export const DelegationForm = ({ className, onClose }: DelegationFormProps) => {
  const [hasSelected, setHasSelected] = useState<boolean>(true);
  const [selectedRows, setSelectedRows] = useState<Platform[]>([]);

  const handleDisabled = useCallback((isDisabled: boolean) => {
    setHasSelected(isDisabled);
  }, []);

  const handleSelectedRows = useCallback((selectedRows: Platform[]) => {
    setSelectedRows(selectedRows);
  }, []);

  return (
    <div className={cls.delegationForm}>
      <div className={cls.headerWrapper}>
        <div className={cls.headerContent}>
          <span className={cls.headerText}>Аккаунты рекламных площадок</span>

          <AddPlatformModal />

          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.headerButton}
            disabled={hasSelected}
            onClick={() => console.log(selectedRows)}
          >
            Делегировать
          </Button>
        </div>
        <div className={cls.closeIcon}>
          <CloseOutlined onClick={onClose} />
        </div>
      </div>

      <div className={cls.descriptionList}>
        <PlatformList onDisabled={handleDisabled} onSelectedRows={handleSelectedRows} />
      </div>
    </div>
  );
};
