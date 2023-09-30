import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';

import styles from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles.header}>
      <Navigation className={styles.navigation} />
      {isLoggedIn ? (
        <UserMenu className={styles.userMenu} />
      ) : (
        <AuthNav className={styles.authNav} />
      )}
    </header>
  );
};
