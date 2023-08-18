import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Made with ❤ by kishor {year}</p>
    </footer>
  );
}

export default Footer;
