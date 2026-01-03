import "../styles/global.css";
import HeaderLanding from '@/src/components/layouts/header/headers/HeaderTemplate';
import Container from '@/src/components/layouts/Containers';
import Footer from '@/src/components/layouts/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderLanding /> 
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}