import React, { FC } from 'react';
import styles from './ContactUs.module.css';

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = () => (
  <div className={styles.ContactUs} data-testid="ContactUs">
    ContactUs Component
  </div>
);

export default ContactUs;
