import axios from 'axios';
import React from 'react';
import Card from "../components/Card";
import AppContext from '../context';


function Orders({ })  {
  const {onAddToCart, onAddToFavorite} = React.useContext(AppContext);
  const[orders, setOrders] =React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=> {
    (async()=>{
      try {
        const {data} = await axios.get(`http://localhost:3001/orders`);
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items],[]));
        setIsLoading(false);
        
      } catch (error) {
        alert('Кочка хуёчка');
        console.log(error);
        
      }
      
    })();
  }, [])
    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 >Мои заказы</h1>
    
        </div>
        
        <div className="d-flex flex-wrap">
    
       {(isLoading ? [...Array(10)] : orders).map((items, index) => (
             <Card 
             key={index}
             onFavorite={(obj)=>onAddToFavorite(obj)}//(obj)=> console.log('Добавили в закладки'
             loading={isLoading} 
             {...items}
                
            />
          ))}
    
        
        </div>
      </div>
    );
}

export default Orders;