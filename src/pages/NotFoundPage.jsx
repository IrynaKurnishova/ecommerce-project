import {Header} from "../components/Header.jsx";

export function NotFoundPage({cart}) {
    return(
        <>
            <Header cart={cart} />
            <div className="container">
                <h2>404 Page Not Found</h2>
            </div>
        </>
    )
}
