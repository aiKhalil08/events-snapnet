import React, { FC } from 'react';
import styles from './CreateEvent.module.css';

interface CreateEventProps {}

const CreateEvent: FC<CreateEventProps> = () => (
  <div className={styles.CreateEvent} data-testid="CreateEvent">
    CreateEvent Component
  </div>
);

export default CreateEvent;
