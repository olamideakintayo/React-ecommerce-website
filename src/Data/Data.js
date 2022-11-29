//We import the images from the image folder.
import Product1 from '../images/product-1.jpeg';
import Product2 from '../images/product-2.jpeg';
import Product3 from '../images/product-3.jpeg';
import Product4 from '../images/product-4.jpeg';
import Product5 from '../images/product-5.jpeg';
import Product6 from '../images/product-6.jpeg';
import Product7 from '../images/product-7.jpeg';
import Product8 from '../images/product-8.jpeg';
const data = {
         
        items: [
          {
               id: "1",
               title: "queen panel bed",
               price: 10.99,
               image: Product1,
              inStock: true
          },

          {
               id: "2",
               title: "king panel bed",
               price: 12.99,
               image:  Product2,
               inStock: true
            },
        
          {
             id: "3",
             title: "single panel bed",
             price: 12.99,
             image: Product3,
             soldout: true
            },
       
          {
              id: "4",
              title: "twin panel bed",
              price: 22.99,
              image: Product4,
              inStock: true
            },
        
          {
            id: "5",
            title: "fridge",
            price: 88.99,
            image: Product5,
            inStock: true
            },
         
          {
             id: "6",
            title: "dresser",
            price: 32.99,
            image:  Product6,
            soldout: true
            },
        
          {
             id: "7",
             title: "couch",
             price: 45.99,
            image: Product7,
            inStock: true
            },
        
          {
             id: "8",
             title: "table",
             price: 33.99,
            image: Product8,
            inStock: true
            },
        
        ]
      }
      


export default data;