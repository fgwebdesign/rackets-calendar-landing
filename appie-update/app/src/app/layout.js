import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/custom-animated.css";
import "../../public/assets/css/default.css";
import "../../public/assets/css/font-awesome.min.css";
import "../../public/assets/css/magnific-popup.css";
import "../../public/assets/css/magnific.dark.css";
import "../../public/assets/css/magnific.rtl.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/style.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
