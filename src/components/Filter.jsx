import { useContext, useEffect } from "react";
import { Cart } from "../Context";

function Filter() {
  const { filterItems, filterItemsWomen, WholeRes } = useContext(Cart);

  return (
    <div>
      <div>
        <button onClick={() => filterItems()}>Men</button>
        <button onClick={() => filterItemsWomen()}>Women</button>
        <button onClick={() => WholeRes()}>All</button>
      </div>
    </div>
  );
}

export default Filter;
