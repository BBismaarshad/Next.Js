// pages.tsx
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Welcome to the Homepage</h2>
                <About />
            </main>
        </div>
    );
};

export default Home;
