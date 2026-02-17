//import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router";
import Background from "./Background";

function RootLayout(){
    return(
        <>
            <Background/>
            
            <Outlet></Outlet>
        </>
    )
}

export default RootLayout;