import React from 'react';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import NotFoundImg from '../../images/NotFoundImg.png';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <>
      <div className={styles.notFound}>
        <GoBackButton />
        <img
          className={styles.notFoundImg}
          src={NotFoundImg}
          alt="Not Found Page"
        />
      </div>
    </>
  );
}

export default NotFoundPage;
