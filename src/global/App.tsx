import React from "react";
import Layout from "./Layout";
import Routes from "./Routes";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
    return <Router>
        <Layout>
            <Routes />
        </Layout>
    </Router>
}