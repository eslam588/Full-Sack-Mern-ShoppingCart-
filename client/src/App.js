import React , {useState} from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import data from './data.json';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';


function App() {
  const [products,setProducts]=useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
 

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if(e.target.value == "ALL") {
      setProducts(data);

    }
    else {
      let cloneProducts = [...data];
      let filteredProducts=cloneProducts.filter(product => product.sizes.indexOf(e.target.value) != -1);
      console.log(filteredProducts);
      setProducts(filteredProducts);
    }
    
  }

  const handleFilterBySort = (e) => {
    setSort(e.target.value);
    let order= e.target.value;
    let cloneProducts = [...data];
    let newProducts = cloneProducts.sort( function(a,b){
      if(order == "lowest"){
        return a.price - b.price
      }
      else if(order == "highest"){
        return b.price - a.price
      }
      if(order == "latest"){
        return a.id < b.id ? 1 : -1
      }
    });
    setProducts(newProducts);
  }

  return (
      <div className="layout">
       <Header/>
        <main>
          <div className="wrapper">
            <Products products={products} />
            <Filter handleFilterBySize={handleFilterBySize} handleFilterBySort={handleFilterBySort} size={size} sort={sort}/>
          </div>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
