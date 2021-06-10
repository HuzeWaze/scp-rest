import React, { Component } from "react";
import _ from 'lodash';
import { restdb, realtimeURL } from './helper.js';

class scp extends Component 
{
    constructor(props){
        super(props);
        this.state ={ping: new Date(), evt: '', scps: []};
    }

    getSCPs = () => {
        restdb.get("/rest/scps?sort=id")
        .then(res => {
            let scps = res.data;
            this.setState(previousState => {
                return {scps};
            });
        });
    }
    componentDidMount() {
        console.log("Start client");
        this.getSCPs();
    }

    render() {
        return(
            <div className="album py-3">
                <div className="container">
                    <div className="row row-cols-1">
                        {this.state.scps.map(scpss =>
                        <div className="mb-3 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" key={scpss.id}>
                            <div className="card shadow-sm bg-dark text-white card-max-height">
                                <img src={scpss.img} />
                                <h1 className="card-header">SCP-{scpss.id}</h1>
                                <div className="card-body overflow-auto">
                                    <h2>Object Class: {scpss.class}</h2>
                                    <h3>Description:</h3>
                                    <p>{scpss.description}</p>
                                    <h3>Special Containment Procedures:</h3>
                                    <p>{scpss.procedures}</p>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default scp;