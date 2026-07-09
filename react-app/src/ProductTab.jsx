import Product from "./Product.jsx";

function ProductTab(){
    let options=["hi-tech" , "durable"];
    let options2 = {a:"hi-tech" , b:"durable"};
  // let options3=[<li>"hi-tech</li> , <li>Durable</li>]
    return(
        <>
        <Product title="Phone" price={200000}  features={options}  features2={options2}/>
        <Product  title="Pen"  price={20}/>
        <Product title="Laptop" price={400} features2={{a:"hi-tech"}} />  // direct object to pass
          <Product  title="Pen"  price={20}/>
    

        </>
    )
}

export default ProductTab;