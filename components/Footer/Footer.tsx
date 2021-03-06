import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import classNames from 'classnames';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <div className={styles.footer} id='footer' aria-label='footer'>
    <div className={classNames('container', styles.footerContent)}>
      <nav className={styles.socialMediaLinks}>
        <a
          href='https://github.com/Jamnic98?tab=repositories'
          target='_blank'
          rel='noreferrer'
          className={styles.socialMediaLink}
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/jamie-stimpson-23ab11203/'
          target='_blank'
          rel='noreferrer'
          className={styles.socialMediaLink}
        >
          <FaLinkedin />
        </a>
      </nav>
    </div>
  </div>
);

export default Footer;
