import React from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"

function Card({ id,
  title,
  imgUrl,
  price,onFavorite,
  onPlus,
  favorited = false,
  added=false,
  loading=false
})
{
  const[isAdded, setIsAdded] = React.useState(added);
  const[isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id,title, imgUrl, price});
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({id, title, imgUrl, price});
    setIsFavorite(!isFavorite);
  }

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
      <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/btncheck.svg" :"img/Group91.svg"} alt="Plus"/>
    </div>
  </>}
    
    </div>
    );
}

export default Card;


 