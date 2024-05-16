import { logout } from '@/actions/auth-actions';
import '../globals.css';

export const metadata = {
  title: 'Mygym',
  description: 'User dashboard mygym',
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logout}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}