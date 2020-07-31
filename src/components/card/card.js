import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import './card.css';
import 'font-awesome/css/font-awesome.min.css';

function card(props){

    return(
        <div class="card mb-4 mx-3">
        <div class="view overlay">
          <img class="card-img-top" src={props.name}   alt="Card image cap"/>
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        <div class="card-body p-3">
        <p class="aqua-sky-text mb-0">{props.desc}</p>
        <h6 class="writer">{props.writer}</h6>
          <ul class="list-unstyled list-inline my-2">
            <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
            <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
            <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
            <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
            <li class="list-inline-item mx-0"><i class="fas fa-star mimosa-text"></i></li>
          </ul>
          <div class="d-flex justify-content-between">
            <div class="chili-pepper-text mb-0 mr-auto">Rs.{props.cost}</div>
            <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star-o unchecked"></span>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button class="btn btn-sm btn-outline-primary button-outline">ADD TO CART</button>
            <button class="btn btn-sm btn-warning button-full">BUY NOW</button>
        </div>
        </div>
      </div>
    )
}

export default card;