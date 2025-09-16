import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}</body>
      
    </html>
  );
}
