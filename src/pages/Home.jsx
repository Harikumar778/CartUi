import { useContext } from "react";
import Filter from "../components/Filter";
import SingleProduct from "../components/SIngleProduct";
import { Cart } from "../Context";

function Home() {
  const { products, values, setValues, active, setActive } = useContext(Cart);
  return (
    <>
      <div>
        <Filter />

        {products.map((ele) => (
          <SingleProduct ele={ele} key={ele.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
