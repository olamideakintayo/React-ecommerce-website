


const Products = ({items}) => {
    console.log(items.price)
    return (
        <div className="">
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
    );
};
export default Products;
