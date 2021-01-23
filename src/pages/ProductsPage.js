import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {Form} from "../components/Form";
import {ProductList} from "../components/ProductList";
import {ProductDetail} from "../components/ProguctDetail";
import {createProduct, deleteProduct, updateProduct} from "../redux/productActions";


function ProductsPage(props) {

    const emptyProduct = {
        name: '',
        description: '',
        price: 0,
        picture: '',
    }

    const [product, setProduct] = useState(emptyProduct);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('index');


    useEffect(() => {
        if (props.products.length) {
            setProduct(props.products[0]);
        }
        localStorage.setItem('products', JSON.stringify(props.products));

    }, [props.products]);

    const onChangeInputHandler = (event) => {
        setProduct(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const onChangeSort = (event) => {
        setSortBy(event.target.value);
    }

    const onFilterChangeHandler = (event) => {
        setFilter(event.target.value);
    }

    const onChangeImageHandler = () => {

    }

    const onClickItemHandler = (index) => {
        setProduct(props.products[index])
    }

    const onDeleteHandler = (index) => {
        props.deleteProduct(index)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (product.id) {
            props.updateProduct(product);
        } else {
            product.id = props.products.length + 1;
            product.picture = '';
            props.createProduct(product);
        }
    }

    const setDetailProduct = (product) => {
        setProduct(product);
    }

    const onAddBtnClickHandler = () => {
        setProduct(emptyProduct);
    }


    return (
        <div className='container'>
            <Form
                onAddBtnClick={onAddBtnClickHandler}
                onFilterChange={onFilterChangeHandler}
                filterValue={filter}
                sortByValue={sortBy}
                onChangeSort={onChangeSort}
            />
            <div className='row gx-2'>
                <div className='col'>
                    {!!props.products.length &&
                    <ProductList
                        products={props.products}
                        onClickItem={onClickItemHandler}
                        onDelete={onDeleteHandler}
                        filter={filter}
                        sortBy={sortBy}
                        setDetailProduct={setDetailProduct}
                    />
                    }
                </div>
                <div className='col'>
                    <ProductDetail
                        product={product || emptyProduct}
                        onChangeInput={onChangeInputHandler}
                        onChangeImage={onChangeImageHandler}
                        onSubmit={onSubmitHandler}
                    />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.product.product
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
            createProduct,
            updateProduct,
            deleteProduct
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
