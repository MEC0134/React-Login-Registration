import React from "react";
import AirIcon from '@mui/icons-material/Air';

function Header() {
    return (
        <header>
            <h1>
                Clima
                <AirIcon fontSize="medium" sx={{ color: "black" }}  />
            </h1>
        </header>
    )
}


export default Header;