import React from "react";

export default function NotFound() {
    return (
        <section className="comming section-padding">
            <div className="v-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>404</h1>
                            <h2>Not Found 404</h2>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6 offset-md-3 text-center">
                            <p>
                                The page you are looking for was moved, removed, renamed or
                                never existed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
