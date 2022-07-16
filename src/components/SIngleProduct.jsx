function SingleProduct({ ele }) {
  return (
    <div>
      <div>
        {ele.name}
        <img src={ele.imageURL} alt={ele.name} width="100px" height="100px" />
        <h3>Rs {ele.price}</h3>
        <h3>{ele.gender}</h3>
        <button>ADD</button>
      </div>
    </div>
  );
}

export default SingleProduct;
