import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import Drawer from './components/Drawer/index.js'
import { Route} from 'react-router-dom'
import ContentLoader from "react-content-loader"
import Home from './pages/Home'
import Favorites from './pages/Favorites';
//json-server -p 3001 data.json -w
import AppContext from './context';
import Orders from './pages/Orders';


function App() {

  const[items, setItems] =React.useState([]);
  const[cartItems, setCartItems] =React.useState([]);
  const[favorites, setFavorites] =React.useState([]);
  const[searchValue, setSearchValue] =React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);



  React.useEffect(()=>{
    async function fetchData() {    
    try {

      const[cartResponse,favoritessResponse,itemsResponse] = await Promise.all([
        axios.get('http://localhost:3001/cart'),
      axios.get('http://localhost:3001/favorites'),
      axios.get('http://localhost:3001/sneakers'),]);
    
    setIsLoading(false)
    setFavorites(favoritessResponse.data);
    setCartItems(cartResponse.data);
    setItems(itemsResponse.data);
      
    } catch (error) {
      alert('Ошибка при запросе данных')
    }
    
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj)=>{
   try {
    if (cartItems.find((items)=> Number(items.parentId) == Number(obj.id)))
    {
      axios.delete(`http://localhost:3001/Cart/${obj.id}`);
      setCartItems((prev) => prev.filter((items) => Number(items.id) != Number(obj.id)));
    } else{
    axios.post('http://localhost:3001/Cart', obj);
    setCartItems((prev) =>[ ...prev, obj]);
    }
     
   } catch (error) {
     alert('Ошибка добавления в корзину')
   }
  };
  const onRemoveItem = (id)=>{
    try {
      axios.delete(`http://localhost:3001/Cart/${id}`);
      setCartItems((prev) =>prev.filter((items) => Number(items.id) != Number(id)));
    } catch (error) {
      alert('Ошибка удаления из корзины')
    }
  
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
  
  const isItemAdded = (id)=>
  {
    return cartItems.some((obj)=> Number(obj.parentId)==Number(id));
  }
  
  return (
  
  <AppContext.Provider value={{ items,
   cartItems, 
   favorites, 
   isItemAdded, 
   onAddToFavorite,
   onAddToCart, 
   setCartOpened, 
   setCartItems 
   }}>
    <div className="wrapper clear">
    
    <Drawer items={cartItems} 
    onClose={()=>{setCartOpened(false)}}
     onRemove={onRemoveItem}
    opened={cartOpened}/> 
    
    
    <Header onClickCart={()=> setCartOpened(true)} />
    <Route path="" component={Home} exact>
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
    
    <Route path="React-LushLace/" component={Favorites} exact>
      <Favorites />
    </Route>

    <Route path="React-LushLace/" component={Orders} exact>
      <Orders />
    </Route>
    
    </div>
  </AppContext.Provider>
  )
};

export default App;
