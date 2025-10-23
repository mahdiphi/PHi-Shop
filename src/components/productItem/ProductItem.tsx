import Pic from "../../assets/pictures/honor-x9c-cyan.avif";

function ProductItem() {
  return (
    <div className="shadow border rounded-t pb-4">
      <img className="rounded-t" src={Pic} alt="" />
      <div className="flex justify-between px-4 mt-2">
        <h3>Product Name</h3>
        <span>600$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2">
          Honor x9c is one of the phones i like Honor x9c is one of the phones i
          like Honor x9c is one of the phones i like Honor x9c is one of the
          phones i like Honor x9c is one of the phones i like
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
