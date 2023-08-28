import Footer from "./Footer";
import "~/assets/style.scss";

export default function Base({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="public/bundle.css" />
      </head>
      <body>
        <div class="noise" />
        <section class="bordered-section">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
