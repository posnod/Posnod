// app/layout.js
import "../styles/global.css";
import Header from "@/components/layouts/header/Header";
import Footer from "@/components/layouts/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header variant="template" />
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}