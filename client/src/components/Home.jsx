import React from "react";
import { Link } from 'react-router-dom';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbCloudyOutlined from '@mui/icons-material/WbCloudyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

function Home() {
    return (
        <div className="container">
            <div className="homepage-icons">
                <WbSunnyOutlinedIcon className="sun" fontSize="large" />
                <WbCloudyOutlined className="cloud" fontSize="large" />
                <ThunderstormOutlinedIcon className="storm" fontSize="large" />
                <AcUnitOutlinedIcon className="snow" fontSize="large" />
            </div>
            <div class="content inner cover">
                <main>
                    <h1 class="cover-heading">Welcome to  Clima...</h1>
                    <p class="lead">your favorite weather app</p>
                    <Link className="nav-link register" to="Register">Register</Link>
                    <Link className="nav-link login" to="Login">Login</Link>
                </main>
            </div>
        </div>
    );
}


export default Home;