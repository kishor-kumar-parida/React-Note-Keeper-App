import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  const year = new Date().getFullYear();
  return (
    <header>
      <h1>
        <center>
          <div class="head">
            <HighlightIcon />
            Keep Your Note Along With 😉
          </div>
        </center>
      </h1>

      <center>
        <p>Copyright ⓒ {year} Made with by ❤ Kishor</p>
      </center>
    </header>
  );
}

export default Header;
