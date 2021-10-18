import React from 'react'
import axios from 'axios';
import Info from "../Card/Info";
import styles from './Drawer.module.scss'
import { useCart } from '../../hooks/useCart';

function Drawer({onClose, onRemove, items = [], opened}){
    
    const {cartItems, setCartItems, totalPrice} =useCart();
    const [orderID, setOrderID] =React.useState(null);
    const [isOrderComplete, setIsOrderComplete] =React.useState(false);
    const [isLoading, setIsLoading] =React.useState(false);
    


    const onClickOrder = async()=>{
    try{
        setIsLoading(true);
        const {data} = await axios.post('http://localhost:3001/orders', {items: cartItems});
        setOrderID(data.id)
        cartItems.map(items => axios.delete(`http://localhost:3001/Cart/${items.id}`));
        setIsOrderComplete(true);
        setCartItems([]);

    } catch (error) 
    {
        alert('Не удалося');
    } finally{
        setIsLoading(false);
    }
    
};

    return(
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible :''}`}>
            <div className={styles.drawer}>
            <h2 className="d-flex justify-between mb-30 mt-30">
                Корзина<img onClick={onClose} className="removeBtn cu-p" src="/img/plus.svg"alt="Close" /></h2>
            
            

            {
                items.length >0 ?
            <div className="d-flex flex-column flex ">
                <div className="items flex">
            
            {items.map((obj)=> (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <div
                 style={{ backgroundImage: `url(${obj.imgUrl})` }}
                  className="cartItemImg"></div>

                <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                </div>
            <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/plus.svg"alt="plus" />   
        </div>))}
        </div> 
        <div className="cartTotalBlock">
            <ul >
                <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>{totalPrice} руб.</b>
                </li>
                <li className="d-flex">
                <span>Налог 50%:</span>
                <div></div>
                <b>{totalPrice/2} руб. </b>
                </li>
            </ul>

            <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ
            <img src="/img/strel.svg" alt="Arrow"/></button>
         </div>
         </div>
            :
            <Info title={isOrderComplete ? "Заказ оформлен" :"Корзина пуста королева" }
            description={isOrderComplete ? `Ваша заказ #${orderID} оформляется а пока идите платите нологи`:"Добавьте хотя бы однин комплект белья, что сделать заказ"}
             image={isOrderComplete ? "/img/order.jpg": "/img/empty-cart.jpg"}/>
            
            }
  
        </div>
    </div>
    );
}

export default Drawer;