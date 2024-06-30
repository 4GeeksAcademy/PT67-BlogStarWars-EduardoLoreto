import React, { useContext } from 'react';
import { Context } from '../store/appContext';


export const FavoriteDropdown = () => {
    const { store, actions } = useContext(Context)
    const { favorites } = store

    return (
        <>
            <div className="btn-group me-5">
                <button className="btn btn-primary dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Favoritos
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {favorites.length}
                    </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end dropdwon-menu-lg-start">
                    {favorites.length == 0 ? <p className="text-center">... Empty</p> : favorites.map((item, index) => {
                        return (
                            <li className="d-flex justify-content-between align-items-center px-2" key={index}>
                                {favorites[index].properties.name}
                                <a href="#" onClick={() => { actions.deleteFavorite(item, index) }}>
                                    <i className="bi bi-trash"></i>
                                </a>
                            </li>

                        )
                    })
                    }
                </ul>
            </div>
        </>
    )
}