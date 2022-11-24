import React, { useState } from "react";
import Header from "./../../components/Header/Header";
import Card from "./../../components/Card/Card";
import NotFound from "./../../components/NotFound/NotFound";
import data from "./../../data/data";
import Footer from "./../../components/Footer/Footer";
import "./App.css";

const App = () => {
    const [tores, setTores] = useState(data);
    const removeTore = (id) => {
        const newToreList = tores.filter((tore) => {
            return tore.id !== id;
        });
        setTores(newToreList);
    };


    return (
        <>
            <Header />
            <div className="container container-card">
                { tores.length == 0 ? <NotFound /> :
                tores.map((tore) => {
                    return (
                        <Card
                            key={tore.id}
                            id={tore.id}
                            image={tore.image}
                            name={tore.name}
                            info={tore.info}
                            click={removeTore}
                        />
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

export default App;
