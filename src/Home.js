import React, { Component } from "react";

class Home extends Component 
{
         render ()
         {
             return(
               <div className="card mt-3 text-center text-danger bg-dark">
                  <h1 class="card-header font-weight-bold">WARNING</h1>
                  <div className="card-body">
                     <img src="images/warning.png" className="pic-small"/>
                     <p class="card-text">THE FOUNDATION DATABASE IS</p>
                     <h5 class="card-title font-weight-bold">CLASSIFIED</h5>
                     <p class="card-text">ACCESS BY UNAUTHORIZED PERSONNEL IS STRICTLY PROHIBITED<br/>PERPETRATORS WILL BE TRACKED, LOCATED AND DETAINED</p>
                     <a href="https://www.google.com/search?q=puppies&tbm=isch" class="btn btn-danger btn-lg btn-block">LEAVE NOW</a>
                  </div>
               </div>
             );
         }
}
export default Home;