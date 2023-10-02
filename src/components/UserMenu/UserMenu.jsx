import { useAuth } from '../hooks/useAuth';

import { ButtonLogOut } from '../ButtonLogOut/ButtonLogOut';

import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();
  // console.log(user);

  return (
    <div className={styles.userMenu}>
      <p className={styles.userText}>Hello, {user.name} 👋</p>
      <p className={styles.emailText}>You're logged in with: {user.email} 📧</p>
      <ButtonLogOut />
    </div>
  );
};
