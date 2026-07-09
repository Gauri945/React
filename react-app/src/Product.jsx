import "./Product.css";

function Product({title, price , features , features2 , features3}){ // by default value
   // Console.log(props);
    console.log(title);
    let styles ={backgroundColor:'pink'};
  // let styles ={backgroundColor: price>3000?'pink':""};   idr humne ispr bhi condition lga di
    let discount= price>30000? " Discount of --> 5%" :"";   //conditions lga skte h ese
    const list = features?.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product" style={styles}>
            <h3>Product Title  {title}</h3>
            <h5>Product Description -- price: {price}</h5>
            <p>{discount}</p>
            <p>{features}</p>
           <p>{features2?.a}</p>
           
           <ul>
  {features?.map((feature, index) => (
    <li key={index}>{feature}</li>
  ))}
</ul>
        </div>
    )
}
export default Product;