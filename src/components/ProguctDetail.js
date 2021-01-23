import React from 'react';
import s from '../styles/products.module.css'

export const ProductDetail = ({ product, onChangeInput, onChangeImage, onSubmit }) => {

    function onClickImageHandler() {

    }

    return (
        <form
            className='card p-2'
            onSubmit={onSubmit}
        >
            <div>
                <div className={s.imageContainer}>
                    <img
                        src={product.picture || "images/no_image.jpg"}
                        alt="Empty"
                        className={s.img}
                        name='picture'
                        onClick={onClickImageHandler}
                    />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    value={ product.name }
                    onChange={onChangeInput}
                    placeholder='Product name ...'
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    rows={5}
                    className="form-control"
                    id="description"
                    name="description"
                    value={product.description}
                    onChange={onChangeInput}
                    placeholder='Description ... '
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label" htmlFor="price">Price</label>
                <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={product.price}
                    onChange={onChangeInput}
                />
            </div>
            <div className={s.btnContainer}>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Save
                </button>
            </div>

        </form>
    )
}
