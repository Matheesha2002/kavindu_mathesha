
import {Outlet} from "react-router";
import Background from "./Background";
import Navigation from "./navigation";
import ScrollToTop from "./ScrollToTop";

function RootLayout(){
    return(
        <>
            <Background/>
            <ScrollToTop/>
            <Navigation/>
            <Outlet/> 
            
        </>
    )
}

export default RootLayout;