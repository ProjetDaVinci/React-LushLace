import { Link} from 'react-router-dom'
import { useCart } from '../hooks/useCart';
import React from 'react';
import Favorites from '../pages/Favorites';

function Header(props) {
  const {totalPrice} =useCart();



    return( 
        <header className="d-flex justify-between align-center p-40">
     <Link to="">
        <div className="d-flex align-center">
        <img width={40} height={40} src="img/mini.png" alt="logotype"  />
          <div >
            <h3  className="text-uppercase">REACT LUSHLACE</h3>
            <p className="opacity-5">Магазин кружевного белья</p>
          </div>
      </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="img/cart.svg" alt="Cart" />
        <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
        
         <Link to="/React-LushLace/Favorites"  >
          <img width={18} height={18} src="img/Vector.png"  alt="Закладки"/>
         </Link>
        </li> 
        <li>
          <Link to="/React-LushLace/Orders" >
            <img width={18} height={18} src="img/Union.svg"  alt="User"/>
          </Link>
        </li> 
      </ul>
    </header>
    );
}

export default Header;