import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import './footer.css';
import Logo2 from '../../logo2.svg';
import play from '../../play.png';
import apple from '../../app-store.png';
import Twitter from '../../Twitter.svg';
import Youtube from '../../Youtube.svg';
import Facebook from '../../Facebook.svg';
import linkedin from '../../Linkedin.svg';

function footer(){
    return(
        <footer class="page-footer font-small mdb-color pt-4">

 
  <div class="container text-center text-md-left">

   
    <div class="row text-center text-md-left mt-3 pb-3">

      
      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <img src={Logo2}/>
        <p class="mt-4">Everything you need on Income Tax, GST and Corporate Laws. Authentic databases, books, journals, Practice and Exam platforms</p>

        <div class="d-flex justify-content-even mt-5">
            <img class="mr-2" src={play}/>
            <img src={apple}/>
        </div>
        <div class="d-flex mt-5">
            <img class="mr-4" src={Facebook}/>
            <img class="mr-4" src={Twitter}/>
            <img class="mr-4" src={linkedin}/>
            <img src={Youtube}/>
        </div>
        <p class="mt-5">
        © 2019 Taxmann.com All Rigts Reserved:
        </p>
      </div>
      

      <hr class="w-100 clearfix d-md-none"/>

      
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
        <p>
          <a href="#!">Research</a>
        </p>
        <p>
          <a href="#!">Practice</a>
        </p>
        <p>
          <a href="#!">Exam</a>
        </p>
        <p>
          <a href="#!">Compliance</a>
        </p>
        <p>
          <a href="#!">Taxmann Bookstore</a>
        </p>
        <p>
          <a href="#!">Taxmann Blog</a>
        </p>


        <h6 class="text-uppercase mb-4 font-weight-bold mt-5">About Company</h6>
        <p>
          <a href="#!">History</a>
        </p>
        <p>
          <a href="#!">Board of Directors</a>
        </p>
        <p>
          <a href="#!">Media Coverage</a>
        </p>
        <p>
          <a href="#!">Taxmann Education(CSR)</a>
        </p>
        <p>
          <a href="#!">Careers</a>
        </p>
      </div>
      

      <hr class="w-100 clearfix d-md-none"/>

      
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Catalogue</h6>
        <p>
          <a href="#!">Academic</a>
        </p>
        <p>
          <a href="#!">Professional</a>
        </p>
        <p>
          <a href="#!">Bare Acts</a>
        </p>
        <p>
          <a href="#!">Banking And Finance</a>
        </p>
        <p>
          <a href="#!">NISM Certifications and Courses</a>
        </p>
        <p>
          <a href="#!">One Solution TDS And ITR</a>
        </p>
        <p>
          <a href="#!">Good and Services Tax</a>
        </p>
        <p>
          <a href="#!">LLB Series</a>
        </p>
        <p>
          <a href="#!">Insolvency And Bankruptcy</a>
        </p>
      </div>

      <hr class="w-100 clearfix d-md-none"/>

     
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Authors</h6>
        <p>
           Academic</p>
        <p>
          Professional</p>
        <p>
          A-Z</p>

          <h6 class="text-uppercase mb-4 font-weight-bold mt-5">Authors</h6>
        <p>
           Quick Delivery with Fedex</p>
        <p>
          Secured Payment</p>
        <p>
          Free Shipping above Rs. 350</p>
          <p>
          Missed Call support @ 4556 2222</p>
      </div>
      <hr class="w-100 clearfix d-md-none"/>


      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Business & Support</h6>
        <p>
           Sell and Taxmann</p>
        <p>
          Locate Dealers</p>
        <p>
          Locate Representatives</p>
          <p>
           Contact Us</p>

          <h6 class="text-uppercase mb-4 font-weight-bold mt-5">Legal</h6>
       
        <p>
          Privacy Policy</p>
        <p>
          Return Policy</p>
          <p>
          Payment Terms</p>
          <p>
           Disclaimer</p>
           <p>
           EULA</p>
      </div>
    </div>
   

    <hr/>

   
   

     
      


        </div>

      
    

  
  
  
 
</footer>
    )
}

export default footer;
