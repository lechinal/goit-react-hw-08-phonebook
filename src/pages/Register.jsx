import { Helmet, HelmetProvider } from 'react-helmet-async';
import { SignUp } from '../components/SignUp/SignUp';

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <SignUp />
      </div>
    </HelmetProvider>
  );
}
