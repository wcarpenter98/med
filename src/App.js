import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Main_menu';
import Consumption_history from './components/Consumption_history'
import Pill_information from './components/Pill_information'
import Detailed_dispense_history from './components/Detailed_dispense_history'
import Verification_photos from './components/Verification_photos'
import Dispense_schedule from './components/Dispense_schedule'
import Current_medication from './components/Current_medication'
import Add_medication from './components/Add_medication'
import Edit_information from './components/Edit_information'
import Edit_user_information from './components/Edit_user_information'
import Edit_login_information from './components/Edit_login_information'
import Edit_caregiver_information from './components/Edit_caregiver_information'
import Edit_machine_information from './components/Edit_machine_information'
import Error from './components/Error';
import Navigation from './components/Navigation';




class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>

                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/consumption_history" component={Consumption_history} />
                        <Route path="/pill_information" component={Pill_information} />
                        <Route path="/detailed_dispense_history" component={Detailed_dispense_history} />
                        <Route path="/verification_photos" component={Verification_photos} />
                        <Route path="/dispense_schedule" component={Dispense_schedule} />
                        <Route path="/current_medication" component={Current_medication} />
                        <Route path="/add_medication" component={Add_medication} />
                        <Route path="/edit_information" component={Edit_information} />
                        <Route path="/edit_user_information" component={Edit_user_information} />
                        <Route path="/edit_login_information" component={Edit_login_information} />
                        <Route path="/edit_caregiver_information" component={Edit_caregiver_information} />
                        <Route path="/edit_machine_information" component={Edit_machine_information} />
                        <Route component={Error} />
                    </Switch>
                    <AmplifySignOut />
                </div>
            </BrowserRouter>

        );
    }
}

export default withAuthenticator(App);

