import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

export default {
    title: 'Layout'
}

export const simple = () => <Router><Layout><>Layout sample demo !</></Layout></Router>