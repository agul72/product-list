import React, {useState} from 'react';
import s from '../styles/products.module.css'

export const ProductItem = ({ product, onDelete, onClickItem }) => {

    const initStyle = 'row g-0 p-2';
    const [styleItem, setStyleItem] = useState(initStyle);


    const onMouseEnterHandler = (style) => {
        setStyleItem(styleItem + ' bg-info');
    }

    const onMouseLeaveHandler = () => {
        setStyleItem(initStyle);
    }

    return (
            <div className={styleItem} >
                <div
                    className='row col-auto'
                    onClick={onClickItem}
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseLeaveHandler}
                >
                    <div className="col-auto">
                        <div className={s.imageContainer}>
                            <img
                                src={product.picture || "images/no_image.jpg"}
                                alt="Empty"
                                className={s.img}
                            />
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="card-body">
                            <h5 className="card-title">{ product.name }</h5>
                            <p className="card-text">{ product.description }</p>
                            <p className="card-text"><small className="text-muted">{ product.price }</small></p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className={s.btnContainer}>
                        <button
                            className="btn btn-warning mb-2"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>

            </div>

    )
}
