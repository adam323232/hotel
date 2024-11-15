import React from "react";

const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-default">
  <div class="container-fluid" >
    <div class="navbar-header">
      <a class="navbar-brand" href="#">ReZsoBa Hotel</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="nav-item"><a href="#">Főoldal</a></li>
      <li class="nav-item"><a href="#">Regisztráció</a></li>
      <li class="nav-item"><a href="#">Bejelentkezés</a></li>
    </ul>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
