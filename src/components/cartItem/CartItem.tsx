import Pic from "../../assets/pictures/honor-x9c-cyan.avif";
import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex mt-5 border-b">
      <img src={Pic} className="w-28" />
      <div>
        <h2>Product Name</h2>
        <div className="mt-2">
          <Button className="mr-2" variant="danger">Remove</Button>
          <Button className="mr-2"  variant="primary">+</Button>
          <span className="mr-2" >2</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
