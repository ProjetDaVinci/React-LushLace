import React from 'react'
import AppContext from '../../context';

export const Info = ({ title, image, description}) => {
    const {setCartOpened} = React.useContext(AppContext);
    return (
        <div>
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width="120px" src={image} alt="PIZDA"/>
                    <h2>{title}</h2>
                    <p className="opacity-6">{description}</p>
                    <button onClick={()=> setCartOpened(false)} className="greenButton"> 
                        <img src="/img/strel.svg" alt="XUY" />
                        Вернуться назад
                    </button> 
            </div>      
        </div>
    )
}

export default Info;