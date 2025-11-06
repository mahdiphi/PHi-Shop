import type { IProduct } from "../../types/server";

type TProductItem = IProduct;

function ProductItem({title, image, price, description}: TProductItem) {
  return (
    <div className="shadow border rounded-t pb-4">
      <img className="rounded-t" src={image} alt="" />
      <div className="flex justify-between px-4 mt-2">
        <h3 className="line-clamp-1 w-52 font-bold">{title}</h3>
        <span className="font-bold">{price}$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
