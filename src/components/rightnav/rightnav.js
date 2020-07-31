import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import './rightnav.css';
import Truck from '../../truck.svg';
import Lock from '../../lock.svg';
import Archive from '../../archive.svg';
import bookstore from '../../image2.png';
import hall from '../../image1.png';


function rightnav(){
    return(
        <div class="main">
            <div class="fixed">
                <div class="d-flex justify-content-between">
                    <img src = {Truck}/>
                    <div class="">
                        <p class="h5">Quick Delivery</p>
                        <p>FedEx courier in most of the cities</p>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <img src = {Archive}/>
                    <div class="">
                        <p class="h5">Free Shipping</p>
                        <p>Across India on orders above Rs 350</p>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <img src = {Lock}/>
                    <div class="">
                        <p class="h5">Secured Payment</p>
                        <p>Taxmann Provides Secure Services</p>
                    </div>
                </div>
            </div>
            <div class="card offer">
                <img src={bookstore} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="h5">Books under Rs. 599 only</p>
                    <p>5000+ books on Income Tax and Corporate Tax</p>
                    <a href="#">Know more</a>
                </div>
                
            </div>
            <div class="card offer">
                <img src={hall} class="card-img-top" alt="..." />
                <div class="card-body">
                <p class="h5">Super Deal of a lifetime</p>
                    <p>Get 2 Modules at a price of 1 module</p>
                    <a href="#">Know more</a>    
                </div>
            </div>
            <div class="card offer">
                <img src={bookstore} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="h5">Books under Rs. 599 only</p>
                    <p>5000+ books on Income Tax and Corporate Tax</p>  
                    <a href="#">Know more</a> 
                </div>
            </div>
            <div class="card offer">
                <img src={hall} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="h5">Super Deal of a lifetime</p>
                    <p>Get 2 Modules at a price of 1 module</p>
                    <a href="#">Know more</a>
                </div>
            </div>
            
        </div>
    )
}

export default rightnav;