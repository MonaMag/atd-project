import React, { useEffect } from 'react';
import cls from './AuditorsPage.module.css';
import { Page } from '../../../widgets/Page/Page';
import { classNames } from '../../../shared/classNames/classNames';
import CategoryList from '../../../entities/Category/ui/CategoryList/CategoryList';
import {
  getCategoryData,
  getCategoryError,
  getCategoryIsLoading,
} from '../../../entities/Category/model/selectors/getCategories';
import { fetchCategory } from '../../../entities/Category/model/services/fetchCategory';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../../shared/hooks/useAppSelector';

interface AuditorPageProps {
  className?: string;
}

const AuditorsPage: React.FC<AuditorPageProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategoryData);
  const error = useAppSelector(getCategoryError);
  const isLoading = useAppSelector(getCategoryIsLoading);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <Page className={classNames(cls.auditorsPage, {}, [className])}>
      <div className={cls.header}>Аудитория</div>
      <div className={cls.auditorsContent}>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>An error occurred: {error}</h2>}
        {categories.map((category) => {
          return <CategoryList key={category.id} category={category} />;
        })}
      </div>
    </Page>
  );
};

export default AuditorsPage;
