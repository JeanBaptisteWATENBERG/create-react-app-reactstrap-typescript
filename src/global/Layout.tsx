import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

interface ILayoutProps {
    children: JSX.Element;
}

export default function Layout({ children }: ILayoutProps) {
    return <div>
        <header>
            <Link to="/">Home</Link>
        </header>
        <div className='mt-3 bg-light'>
            <Container>
                {children}
            </Container>
        </div>
    </div>
}