import React from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"

import AppContext from '../../context';

function Card({ 
  id,
  title,
  imgUrl,
  price,onFavorite,
  onPlus,
  favorited = false,
  added=false,
  loading=false
})
{
  const {isItemAdded} = React.useContext(AppContext);
  const[isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = {id,parentId:id,title, imgUrl, price}

  console.log(title,isItemAdded(id))

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

    return(
    <div className={styles.card}>
      {loading ? ( <ContentLoader 
    speed={2}
    width={600}
    height={400}
    viewBox="0 0 600 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="260" height="280" /> 
    <rect x="0" y="285" rx="10" ry="10" width="260" height="30" /> 
    <rect x="0" y="320" rx="10" ry="10" width="200" height="30" /> 
    <rect x="0" y="355" rx="10" ry="10" width="160" height="45" /> 
    <rect x="215" y="355" rx="10" ry="10" width="45" height="45" />
  </ContentLoader>) : 
  <>
    <div className={styles.favorite} onClick={onClickFavorite}>
      <img 
        src={isFavorite ?  'img/heartlike.svg':'img/heart.svg'}
        alt="Unliked"/>
    </div>
    
    <img width="100%" height={350} src={imgUrl} alt="Comp"/>
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
     <div className="d-flex flex-column">
       <span>Цена:</span>
       <b>{price} руб.</b>
     </div>
      {onPlus && (<img
      className={styles.plus} 
      onClick={onClickPlus} 
      src={isItemAdded(id)? "img/btncheck.svg" :"img/Group91.svg"
      }
       alt="Plus"/>)}
    </div>
  </>}
    
    </div>
    );
}

export default Card;


 