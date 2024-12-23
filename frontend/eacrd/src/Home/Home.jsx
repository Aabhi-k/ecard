import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div className='home'>
            <div className="left-side"></div>
            <div className="right-side">
                <h1>Welcome</h1>

                <div className="content">
                    
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore deserunt eos beatae, accusamus quam architecto modi ullam quaerat temporibus sunt tenetur praesentium corrupti, a et necessitatibus ea. Veritatis repudiandae magni, unde quod molestiae est nam. Ullam veritatis fugiat distinctio culpa porro dicta recusandae aliquid. Molestias quo illum rem sint.</p>


                    <div className="acc">
                        <a href="/login"> Login to your Account</a>
                        <a href="/register">Register a new Account</a>
                    </div>

                </div>

            </div>
           

        </div>
    );
};

export default Home;