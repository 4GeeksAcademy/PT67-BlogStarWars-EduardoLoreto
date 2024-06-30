import React, { useContext } from 'react';
import { Context } from '../store/appContext.js'
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const ItemCard = ({ item, type }) => {
    const { actions } = useContext(Context)
    const { properties } = item
    const { uid } = item

    return (
        <div className="card row container-fluid" style={{ width: "20rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${type}s/${uid}.jpg`} className="card-img-top" alt={`${type}-img`} />
            <div className="card-body">
                <h4 className="card-title"><strong>{properties.name}</strong></h4>
                {type === "person" && (
                    <>
                        <p className="card-text"><strong>Gender: </strong>{properties.gender}</p>
                        <p className="card-text"><strong>Birth year: </strong>{properties.birth_year}</p>
                    </>
                )}
                {type === "planet" && (
                    <>
                        <p className="card-text"><strong>Population: </strong>{properties.population}</p>
                        <p className="card-text"><strong>Terrain: </strong>{properties.terrain}</p>
                    </>
                )}
                {type === "vehicle" && (
                    <>
                        <p className="card-text"><strong>Model: </strong>{properties.model}</p>
                        <p className="card-text"><strong>Manufacturer: </strong>{properties.manufacturer}</p>
                    </>
                )}
            </div>
            <div className="card-footer d-flex justify-content-between">
                <Link to={`learn/${type}/${uid}`}>
                    <button className="btn btn-primary">Learn more!</button>
                </Link>
                <button className="btn btn-outline-warning" onClick={() => actions.addFavorite(item)}>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
        </div>
    )
}
