import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { ItemCard } from "../component/ItemCard.js";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context)
  const { people, vehicles, planets } = store

  return (
    <>
      <div className="container py-3 mx-5">

        <div className="text-danger h3">
          <strong>Caracters</strong>
        </div>
        <div>
          <div className="d-flex justify-content-between overflow-auto mb-5">
              {people.map((item, index) => {
                return (
                  <div className="w-100" key={index}>
                    <ItemCard key={index} item={item} type={"person"} />
                  </div>
                )
              })}
          </div>
        </div>


        <div className="text-danger py-3 h3">
          <strong>Planets</strong>
        </div>
        <div>
          <div className="d-flex justify-content-between overflow-auto mb-5">
            {planets.map((item, index) => {
              return (
                <div className="w-100" key={index}>
                  <ItemCard key={index} item={item} type={"planet"} />
                </div>
              )
            })}
          </div>
        </div>


        <div className="text-danger py-3 h3">
          <strong>Vehicles</strong>
        </div>
        <div>
          <div className="d-flex justify-content-between overflow-auto mb-5">
            {vehicles.map((item, index) => {
              return (
                <div className="w-100" key={index}>
                  <ItemCard key={index} item={item} type={"vehicle"} />
                </div>
              )
            })}
          </div>
        </div>
      </div >

    </>
  )
};
