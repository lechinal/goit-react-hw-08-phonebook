import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SignIn } from '../components/SignIn/SignIn';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <SignIn />
      </div>
    </HelmetProvider>
  );
}
