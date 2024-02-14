export default function BoxView({ topProduct, onSelectedProduct }) {
  return (
    <div className="box_view">
      {topProduct?.map((data) => (
        <div className="card_product" key={data.id} onClick={() => onSelectedProduct(data.id)}>
          <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  );
}
