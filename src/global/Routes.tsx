import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "../home/Home";

export default function Routes() {
    return <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>;
}