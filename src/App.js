import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import Drawer from './components/Drawer'
import { Route} from 'react-router-dom'
import ContentLoader from "react-content-loader"
import Home from './pages/Home'
import Favorites from './pages/Favorites';
//json-server -p 3001 data.json -w


function App() {

  const[items, setItems] =React.useState([]);
  const[cartItems, setCartItems] =React.useState([]);
  const[favorites, setFavorites] =React.useState([]);
  const[searchValue, setSearchValue] =React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=>{
    async function fetchData() {    
    const cartResponse = await axios.get('http://localhost:3001/cart');
    const favoritessResponse = await axios.get('http://localhost:3001/favorites');
    const itemsResponse = await axios.get('http://localhost:3001/sneakers');
    setIsLoading(false)
    setFavorites(favoritessResponse.data);
    setCartItems(cartResponse.data);
    setItems(itemsResponse.data);
    
    }

    fetchData();
  }, []);

  const onAddToCart = (obj)=>{
    if (cartItems.find((items)=> Number(items.id) == Number(obj.id)))
    {
      axios.delete(`http://localhost:3001/Cart/${obj.id}`);
      setCartItems((prev) => prev.filter((items) => Number(items.id) != Number(obj.id)));
    } else{
    axios.post('http://localhost:3001/Cart', obj);
    setCartItems((prev) =>[ ...prev, obj]);
    }
  };
  const onRemoveItem = (id)=>{
    axios.delete(`http://localhost:3001/Cart/${id}`);
    setCartItems((prev) =>prev.filter((items) => items.id != id));
  };
  const onAddToFavorite =  async(obj) =>{
    try{
      if(favorites.find((favObj) => favObj.id == obj.id))
      {
        axios.delete(`http://localhost:3001/Favorites/${obj.id}`);
       
      } else{
        const {data} = await axios.post('http://localhost:3001/Favorites', obj);
        setFavorites((prev) =>[ ...prev, data]);
      }
    }
    catch(error) {
      alert('хуй не в жопе');
    }
  };


  const onChangeSearchInput =(event) =>{
    setSearchValue(event.target.value);
  };
  
  
  return (
  
  <div className="wrapper clear">
    
    {cartOpened && <Drawer items={cartItems} onClose={()=>{setCartOpened(false)}} onRemove={onRemoveItem}/> }
    <Header onClickCart={()=> setCartOpened(true)} />
    <Route path="/" exact>
      <Home 
      items={items} 
      cartItems={cartItems}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onChangeSearchInput={onChangeSearchInput}
      onAddToFavorite={onAddToFavorite}
      onAddToCart={onAddToCart}
      isLoading={isLoading}
      />
    </Route>
    
    <Route path="/favorites" exact>
      <Favorites 
      items={favorites}
      onAddToFavorite={onAddToFavorite}
      />
    </Route>
    
    </div>
  )
};

export default App;
