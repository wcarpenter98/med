import React, { Component } from 'react'
import { getAddMedicationApp } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { createAddMedicationApp } from '../graphql/mutations'

class addMedication extends Component {

    state = {
      medicationName: "",
      quantity: "",
      refillFrequency: ""
         
    }

	componentDidMount = async () => {
		//tba
	}

    handleAddMed = async () => {
        event.preventDefault();

        const input = {
            medicationName: this.state.medicationName,
            quantity: this.state.quantity,
            refillFrequency: this.state.refillFrequency
        }
        //createAddMedicationApp is from the mutations.js file
        await API.graphql(graphqlOperation(createAddMedicationApp, { input }));

        //makes sure it clears the form fields, this is required because the value is attached
        // to the state itself.
        this.setState({ medicationName: "", quantity: "", refillFrequency: "" })
    }

    //retrieve information from the form and change the state 
    handleMedFormChange = event => this.setState({
        [event.target.name]: event.target.value
    });






    

	render() {
        return (
            <div>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap" rel="stylesheet" />
                <title>Add Medication</title>

                <div id="menu-banner" class="row text-center py-3">
                    <div class="col">
                        <p class="display-5" id="login-title">
                            <a href="/">
                                <img id="menu-image" src="https://wchstv.com/resources/media/1f5b2909-ee90-495b-be68-68d26537cbab-large16x9_WVU.png?1518011273124" />
                            </a>
                        </p>
                    </div>
                </div>

                <div class="container-fluid text-center mt-5">

                    <form class="justify-content-center">
                        <div class="row">
                            <div class="col">
                                <h1 class="display-6">Add Medication</h1>
                            </div>
                        </div>

                        <div class="row justify-content-center my-2">
                            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-7 px-1">
                                <input type="text" class="form-control custom-input" placeholder="Medication Name" required value={this.state.medicationName} onChange={this.handleMedFormChange} />
                            </div>
                        </div>
                        <div class="row justify-content-center my-2">
                            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-7 px-1">
                                <input type="number" class="form-control custom-input" placeholder="Quantity" required value={this.state.quantity} onChange={this.handleMedFormChange}/>
                            </div>
                        </div>
                        <div class="row justify-content-center my-2">
                            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-7 px-1">
                                <input type="number" class="form-control custom-input" placeholder="Refill Frequency (Days)" required value={this.state.refillFrequency} onChange={this.handleMedFormChange}/>
                            </div>
                        </div>
                        <div class="row justify-content-center my-4">
                            <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-7">
                                <input type="submit" class="btn btn-light form-control" onSubmit={this.handleAddMed} />
                            </div>
                        </div>
                    </form>


                    <div class="row justify-content-center pb-5">
                        <div class="col-xl-2 col-lg-3 col-12">
                            <button class="menu-button btn btn-light my-2" ><a href="/current_medication">Current Medication</a></button>
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
}