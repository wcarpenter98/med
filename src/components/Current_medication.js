import React from 'react';
 
const Current_medication = () => {
    return (
       <div>
       		<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
    
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet"/>
    <title>Current Medication</title>
  
    <div id="banner" class="row text-center py-3">
        <div class="col">
            <p class="display-5" id="login-title">
                <a href="/">
                    <img id="menu-image" src="https://wchstv.com/resources/media/1f5b2909-ee90-495b-be68-68d26537cbab-large16x9_WVU.png?1518011273124"/>
                </a>
            </p>
        </div>
    </div>
    
    <div class="container-fluid text-center mt-5">
        <div class="row justify-content-center mt-5 ">
          <h1 class="display-6 mb-5">Current Medication</h1>
        </div>

       
        <form class="justify-content-center">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-5">
              <input type="text" class="form-control custom-input" placeholder="Med. Name" autofocus required/>
            </div>
            <div class="col-lg-3 col-md-4 col-5">
              <input type="submit" value="Search" class="btn btn-light form-control"/>
            </div>
          </div>
        </form>

         
         <div class="row justify-content-center my-2">
          <div class="col-lg-6 col-md-8 col-10 px-1">
            <hr/>
          </div>
        </div>

        
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-10 scroll-table">
            <table class="table table-striped table-bordered table-hover table-responsive">
              <thead class="table-head">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Refill Frequency</th>
                </tr>
              </thead>
              <tbody class="">
                <tr>
                  <td>1</td>
                  <td>Med1</td>
                  <td>60</td>
                  <td>30 Days</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Med2</td>
                  <td>120</td>
                  <td>30 Days</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Med3</td>
                  <td>90</td>
                  <td>30 Days</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Med4</td>
                  <td>60</td>
                  <td>30 Days</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Med5</td>
                  <td>120</td>
                  <td>30 Days</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Med6</td>
                  <td>90</td>
                  <td>30 Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
        <div class="row justify-content-center">
          <div class="col-xl-2 col-lg-3 col-12">
            <button type="button" class="btn btn-light menu-button" ><a href="/add_medication">Add Medication</a></button>
          </div>
          <div class="col-xl-2 col-lg-3 col-12">
                <button class="menu-button btn btn-light my-2" ><a href="/pill_information">Pill Information</a></button>
            </div>
          <div class="col-xl-2 col-lg-3 col-12">
            <button class="menu-button btn btn-dark my-2" ><a href="/">Main Menu</a></button>
          </div>
        </div>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    </div>
    );
}
 
export default Current_medication;