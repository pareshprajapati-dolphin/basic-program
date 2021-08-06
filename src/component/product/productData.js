
const ProductData = (props) => {
 const { image, name, price} = props.data;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3 mt-2">
                        <div className="card" style={{ width: '18 rem' }}>
                            <img className="cardimg" src={image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{price}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductData;