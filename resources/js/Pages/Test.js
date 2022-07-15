
import Login2 from '@/Components/Login2';
import Support from '@/Components/Support';
import Testimonial from '@/Components/Testimonial';
import { Box, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player';
import { Card, Icon, Image } from 'semantic-ui-react'
import man from "../assets/images/man.png";
import MyBook from './Catalogue';
import Catalogue from './Catalogue';
import DemoBook from './Catalogue2';
import Demo from './Demo';
import FormationGrid from './Formation/FormationGrid';
const CardExampleImageCard = () => {
return(
    <>
<nav class="navbar navbar-expand-lg navbar-dark primary-color">


  <a class="navbar-brand" href="#">Navbar</a>

 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
  

    <form class="form-inline">
      <div class="md-form my-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    </form>
  </div>

</nav>

    
<Login2/>
<Testimonial/>
</>
)}

export default CardExampleImageCard
