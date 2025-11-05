import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Pic from "../../assets/pictures/honor-x9c-cyan.avif";
import Button from "../../components/button/Button";

function Product() {
  const params = useParams();
  return (
    <div>
      <Container>
        <div className="h-96 shadow grid grid-cols-12 mt-5">
          <div className="bg-amber-300 col-span-2 p-4">
            <img className="rounded" src={Pic} alt="" />
            <div>
              <Button 
              className="mt-2 w-full py-3"
              variant= "success">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="bg-gray-800 col-span-10 p-4">
            <h1 className="text-cyan-50">Product Name</h1>
            <div className="text-cyan-50">
              <p>Price: $600</p>
              <p>
                agaefassssssss eraga gaw4tg4watfegaw4a agaefassssssss eraga
                gaw4tg4watfegaw4a agaefassssssss eraga gaw4tg4watfegaw4a
                agaefassssssss eraga gaw4tg4watfegaw4a
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
