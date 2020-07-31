import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import logo1 from "./logo1.svg";
import notification from "./Notification.svg";
import profile from "./Profile.svg";
import research from "./Reserach.svg";
import cart from "./Cart.svg";
import './App.css';

function App() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={logo1} />
 
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search anything on tax and corporate law in bookstore" aria-label="Search"/>
    </form>
      </li>
     
    </ul>
    <ul class="navbar-nav">
    <li class="nav-item active px-3">
        <a class="nav-link r px-3 rounded-circle" href="#">R <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item border-left px-3">
        <a class="nav-link e px-3 rounded-circle" href="#">E</a>
      </li>
      <li class="nav-item border-left px-3">
        <a class="nav-link c px-3 rounded-circle" href="#">C</a>
      </li>
      <li class="nav-item dropdown border-left px-3">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src={research}/>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src={notification}/>
        </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">
          <img src={profile}/>
        </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">
          <img src={cart}/>
        </a>
      </li>
    </ul>
    
  </div>
</nav>

  );
}

export default App;
