import { useState } from "react";
import BoxView from "./TopProductView";
import BoxPreview from "./TopProductPreview";
import TopProductDeskripsi from "./TopProductDeskripsi";

export default function TopProduct({ TopProductItem }) {
  const [topProduct] = useState(TopProductItem);
  const [selectedProduct, setSelectProduct] = useState(topProduct[0]);

  function handleSelectProduct(id) {
    const newProduct = topProduct.filter((Product) => Product.id === id);
    setSelectProduct(newProduct[0]);
  }
  return (
    <div className="container">
      <div id="top_product">
        <h2>Top Product</h2>
        <div className="box_top">
          <BoxView topProduct={topProduct} onSelectedProduct={handleSelectProduct} />
          <BoxPreview selectedProduct={selectedProduct} />
          <TopProductDeskripsi />
        </div>
      </div>
    </div>
  );
}
