import { Button, Heading } from '@acme/ui';

import styles from './App.module.css';

function App() {
  const events = [
    { name: 'Team building', date: '07-15-2022' },
    { name: 'Corporate marathon', date: '08-05-2022' },
    { name: 'Fire drill', date: '12-01-2022', canceled: true },
  ];
  return (
    <div className={styles.container}>
      <Heading>Corporate Events</Heading>
      <div className={styles.button}>
        <Button>Login</Button>
      </div>
      <div className={styles.wrapper}>
        {events.map(({ name, date, canceled }) => (
          <div key={name} className={styles.event}>
            <p className={styles.title} style={{ textDecoration: canceled ? 'line-through' : '' }}>
              {name}
            </p>
            <p>{date}</p>
          </div>
        ))}
      </div>
      <br />
      <p>Copyright 2022 ACME</p>
    </div>
  );
}

export default App;
