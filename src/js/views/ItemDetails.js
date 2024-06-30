import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

import "../../styles/home.css";

export const ItemDetails = () => {
    const { store, actions } = useContext(Context)
    const { people, planets, vehicles } = store
    const params = useParams()

    return (
        <>
            {params.type == "person" && people.map((item, index) => {
                const { properties } = item
                if (item.uid == params.uid) {
                    return (
                        <>

                            

                            <div className="container m-5" key={index}>
                                <div className="card mb-4">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="img-fluid rounded-start" alt="learn-img" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"><strong>{properties.name}</strong></h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="border-top border-danger text-danger row">
                                    <h6 className="col"><strong className="d-block">Name</strong>
                                        <p className="d-block">{properties.name}</p>
                                    </h6>
                                    <h6 className="col"><strong className="d-block">Birth year</strong>
                                        <p className="d-block">{properties.birth_year}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Gender</strong>
                                        <p className="d-block">{properties.gender}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Height</strong>
                                        <p className="d-block">{properties.height}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Skin color</strong>
                                        <p className="d-block">{properties.skin_color}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Eye color</strong>
                                        <p className="d-block">{properties.eye_color}</p>
                                    </h6>
                                </div>
                            </div>
                        </>
                    )
                }
            })}


            {params.type == "planet" && planets.map((item, index) => {
                const { properties } = item
                if (item.uid == params.uid) {
                    return (
                        <>
                            <div className="container m-5" key={index}>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} className="img-fluid rounded-start" alt="learn-img" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"><strong>{properties.name}</strong></h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-top border-danger text-danger row">
                                    <h6 className="col">
                                        <strong className="d-block">Name</strong>
                                        <p className="d-block">{properties.name}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Diameter</strong>
                                        <p className="d-block">{properties.diameter}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Rotation periodo</strong>
                                        <p className="d-block">{properties.rotation_periodo}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Population</strong>
                                        <p className="d-block">{properties.population}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Terrain</strong>
                                        <p className="d-block">{properties.terrain}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Climate</strong>
                                        <p className="d-block">{properties.climate}</p>
                                    </h6>
                                </div>
                            </div>
                        </>
                    )
                }
            })}


            {params.type == "vehicle" && vehicles.map((item, index) => {
                const { properties } = item
                if (item.uid == params.uid) {
                    return (
                        <>
                            <div className="container m-5" key={index}>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} className="img-fluid rounded-start" alt="learn-img" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title"><strong>{properties.name}</strong></h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>f
                                </div>

                                <div className="border-top border-danger text-danger row">
                                    <h6 className="col">
                                        <strong className="d-block">Model</strong>
                                        <p className="d-block">{properties.model}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Vehicle class</strong>
                                        <p className="d-block">{properties.vehicle_class}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Manufacturer</strong>
                                        <p className="d-block">{properties.manufacturer}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Cost in credits</strong>
                                        <p className="d-block">{properties.cost_in_credits}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Passengers</strong>
                                        <p className="d-block">{properties.passengers}</p>
                                    </h6>
                                    <h6 className="col">
                                        <strong className="d-block">Max atmosphering speed</strong>
                                        <p className="d-block">{properties.max_atmosphering_speed}</p>
                                    </h6>
                                </div>
                            </div>
                        </>
                    )
                }
            })}


            <Link to={"/"}>
                < button className="btn btn-primary ms-5">Home</button>
            </Link>
        </>
    )

};
