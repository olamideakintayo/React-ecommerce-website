


const Products = ({items}) => {
    return (
        <div>
            {/* We then create a map function that whenever we call it, it will create a new array from the existing array and display the items */ }
            {items.map((item) => (
                <div>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                </div>
            ))};
        </div>
    );
};
export default Products;
