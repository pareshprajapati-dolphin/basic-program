import React, { useContext } from 'react';
import { productContext  } from "./context"

const ContextAPi = () => {

    let context = useContext(productContext);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                        <div className="col-6 col-md-3 mt-2">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{context.id}</h5>
                                    <p className="card-text">{context.name}</p>
                                    <p className="card-text">{context.location}</p>
                                </div>
                            </div>

                        </div>
                </div>
            </div>
        </>
    );
};

export default ContextAPi;