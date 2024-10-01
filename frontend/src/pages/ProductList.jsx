import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                dispatch(setProducts(data.products));
            });
    }, [dispatch]);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
