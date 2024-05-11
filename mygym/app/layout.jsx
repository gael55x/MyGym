import './globals.css';

export const metadata = {
  title: 'Mygym',
  description: 'A webapp that personalizes user gym routine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}