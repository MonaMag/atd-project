import React from 'react';
import { Page } from '../../widgets/Page/Page';

const ForbiddenPage = () => {
  return <Page data-testid="ForbiddenPage">{'У вас нет доступа к этой странице'}</Page>;
};

export default ForbiddenPage;
