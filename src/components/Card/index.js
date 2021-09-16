import React from 'react';
import styles from './Card.module.scss'


function Card({onFavorite, title, imgUrl, price, onPlus}){
  const[isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imgUrl, price});
    setIsAdded(!isAdded)
  }

React.useEffect(()=>{
console.log('Перемеггая привет')
}, [isAdded]); 


    return(
    <div className={styles.card}>
    <div className={styles.favorite} onClick={onFavorite}>
    <img src="/img/heart.svg" alt="Unliked"/>
    </div>
    
    <img width={270} height={350} src={imgUrl} alt="Comp"/>
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
     <div className="d-flex flex-column">
       <span>Цена:</span>
       <b>{price} руб.</b>
     </div>
      <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/btncheck.svg" :"img/Group91.svg"} alt="Plus"/>
    </div>
    </div>
    );
}

export default Card;


 