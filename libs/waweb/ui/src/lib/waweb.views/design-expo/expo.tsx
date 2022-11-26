import styles from './expo.module.css';

/* eslint-disable-next-line */
export interface ExpoViewProps {}

export function ExpoView(props: ExpoViewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Expo!</h1>
    </div>
  );
}

export default ExpoView;
