import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Category></Category>
        </div>
    );
};

export default Home;