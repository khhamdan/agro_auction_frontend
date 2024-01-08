import React from 'react';
import ProductDetails from '../../components/productDetails';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  console.log('productId 1', id);
  return (
    <div
      style={{
        paddingTop: '2%',
        height: '100vh',
      }}
    >
      <ProductDetails productId={id} />
    </div>
  );
}
