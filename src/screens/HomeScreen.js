import products from "../data";
import "./HomeScreen.css";
import ProductCard from "../Components/ProductCard";

const HomeScreen = (props) => {

    const Full = () => products.map((product) => (<ProductCard key={product.id} product={product} />))      

    const Fill = () => products.filter(products => 
      products.name.toLowerCase().includes(props.input)).map(product => {
        return(
          <ProductCard key={product.id} product={product} />
        );
      })

    return (
      <div className='products__wrapper'>
        {props.input === "" ? <Full/> : <Fill/>}    
      </div>
    ) 
};

export default HomeScreen;
