import React, { FC } from 'react';
import styles from './PageHeader.module.css';
import { headerObjType } from '../../types/global';

interface PageHeaderProps {
  headerObj: headerObjType;
}

const PageHeader: FC<PageHeaderProps> = ({ headerObj }) => {
  const { title, description } = headerObj;
  return (
    <header className={styles.header} data-testid='header'>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <hr className={styles.hr} />
    </header>
  );
};

export default PageHeader;
