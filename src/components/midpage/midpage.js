import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import Booksection from '../booksection/booksection';
import './midpage.css';
import Corousel from '../corousel/corousel';
import booksection from '../booksection/booksection';

function midpage(){
    return(
        <div class="col-sm-7 section">
            <Corousel/>
            <Booksection />
        </div>
    )
}

export default midpage;