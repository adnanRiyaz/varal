import React from 'react'
import navbrand from'../../assets/navLogo.png'
import './navbar.css'
export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={navbrand}alt="" srcset="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">About Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn1 btn-outline-primary" type="submit">Start a Company</button>
      </form>
    </div>
  </div>
</nav>
    )
}
