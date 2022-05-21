import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useEffect, useState } from "react";

const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

        if(token) {
            return setAuthenticated(true)
        }
    }, [authenticated])

    return(
        <Switch>
            <Route exact path='/register'>
                <Register authenticated={authenticated}/>
            </Route>
            <Route exact path='/'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route exact path='/home'>
                <Home authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
        </Switch>
    )
}

export default Routes;