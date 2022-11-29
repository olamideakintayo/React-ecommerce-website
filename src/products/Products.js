


const Products = ({items}) => {
    console.log(items)
    return (
        <div className="">
             <section class="products font-body" id="product">
    <div class="section-title text-center capitalize">
      <h2 class="text-center capitalize animate__animated animate__flipInX animate__delay-2s animte__duration-3">our products</h2>
    </div>
   
    <div class="products-center grid m-auto">
{/* We then create a map function that whenever we call it, it will create a new array from the existing array and display the items */ }
{items.map((item) =>(
                <div className=""> 
                       <div className="">
                        <img className="" src={item.image} alt={item.title} />
                    </div>
                    <div>
                        <h3 className="">
                            {item.price}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
        </section>

</div>
            
    );
};
export default Products;
