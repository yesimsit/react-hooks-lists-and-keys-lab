import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkItems=links.map((x) => (
    <a key={x} href={"#" + x}>
      {x}
    </a>
  ));
  return <nav>{linkItems}</nav>;
}

 
  


export default NavBar;
