import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { ItemCard } from "../component/ItemCard.js";
import "../../styles/home.css";
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
    const { store, actions } = useContext(Context)
    const { people, vehicles, planets } = store

    const renderCarouselItems = (items, type) => {
        return items.map((item, index) => (
            <Carousel.Item key={index}>
                <ItemCard item={item} type={type} />
            </Carousel.Item>
        ));
    };

    return (
        <>
            <div className="container py-3 mx-5">
                <div className="text-danger h3">
                    <strong>Caracters</strong>
                </div>
                <Carousel>
                    {renderCarouselItems(people, "person")}
                </Carousel>

                <div className="text-danger py-3 h3">
                    <strong>Planets</strong>
                </div>
                <Carousel>
                    {renderCarouselItems(planets, "planet")}
                </Carousel>

                <div className="text-danger py-3 h3">
                    <strong>Vehicles</strong>
                </div>
                <Carousel>
                    {renderCarouselItems(vehicles, "vehicle")}
                </Carousel>
            </div>
        </>
    )
};
