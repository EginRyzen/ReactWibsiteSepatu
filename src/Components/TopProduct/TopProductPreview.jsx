export default function BoxPreview({ selectedProduct }) {
  return (
    <div className="box_preview">
      <img src={selectedProduct.img} alt="" />
    </div>
  );
}
