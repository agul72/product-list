import React, {useState, useEffect} from "react";
import {ProductItem} from "./ProductItem";
import {NavPanel} from "./NavPanel";

export const ProductList = (
    {
        products,
        filter,
        sortBy,
        onClickItem,
        onDelete,
        setDetailProduct
    }) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [pageListProduct, setPageListProduct] = useState([]);

    useEffect(() => {
        const selected = [];
        if (products) {
            products.forEach((product, index) => {
                if (!filter.length ||
                    product.name.toLowerCase().trim().includes(filter.toLowerCase().trim())) {
                    selected.push({product, index})
                }
            })
        }
        setSelectedProducts(selected.sort());
        const maxPageNumber = Math.ceil(selected.length / 5);
        if (!pageNumber || pageNumber < 1) {
            setPageNumber(1);
        }
        if (pageNumber > maxPageNumber) {
            setPageNumber(maxPageNumber);
        }
    }, [products, filter, pageNumber]);

    useEffect(() => {
        let sorted;
        if (selectedProducts.length) {
            switch (sortBy) {
                case 'index':
                    sorted = selectedProducts.sort((a, b) =>
                        a.index - b.index
                    );
                    break;
                case 'name':
                    sorted = selectedProducts.sort((a, b) =>
                        a.product.name < b.product.name ? -1 : 1
                    );
                    break;
                case 'price':
                    sorted = selectedProducts.sort((a, b) =>
                        a.product.price - b.product.price
                    );
                    break;
                default:
                    sorted = selectedProducts.sort();
            }
            setSelectedProducts(sorted);
        }

    }, [sortBy, selectedProducts])

    useEffect(() => {
        const listProduct = selectedProducts.slice((pageNumber - 1) * 5, pageNumber * 5);
        setPageListProduct(listProduct);
        // setDetailProduct(listProduct[0]);
    }, [selectedProducts, pageNumber, sortBy]);

    useEffect(() => {
        if (pageListProduct.length) {
            setDetailProduct(pageListProduct[0].product)
        }
    }, [pageListProduct])

    function getProductItem({product, index}) {
        return (
            <div
                className='card m-2'
                key={index}
            >
                <ProductItem
                    product={product}
                    onClickItem={() => onClickItem(index)}
                    onDelete={() => onDelete(index)}
                />
            </div>
        )
    }

    function onChangePageNumberHandler(number) {
        const maxNumber = Math.ceil(selectedProducts.length / 5)
        const currentPageNumber = pageNumber;
        if (number) {
            if (number < 0) {
                setPageNumber(1)
            } else if (number > maxNumber) {
                setPageNumber(maxNumber)
            } else {
                setPageNumber(number);
            }
        } else {
            setPageNumber(currentPageNumber);
        }
    }

    function btnNextPageClickHandler() {
        if (pageNumber < Math.ceil(selectedProducts.length / 5)) {
            setPageNumber(pageNumber + 1);
        }
    }

    function btnPrevPageClickHandler() {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    }

    if (!pageListProduct.length) {
        return (
            <div className='card p-2'>
                <h3>List is empty</h3>
            </div>
        )
    }

    return (
        <>
            <div className='card p-2'>
                {pageListProduct.map((product) =>
                    getProductItem(product)
                )}
            </div>
            <div>
                <NavPanel
                    page={pageNumber}
                    pages={Math.ceil(selectedProducts.length / 5)}
                    onChangePageNumber={onChangePageNumberHandler}
                    onNextPageButtonClick={btnNextPageClickHandler}
                    onPrevPageButtonClick={btnPrevPageClickHandler}
                />
            </div>
        </>
    )
}
