function Drawer({onClose, onRemove, items = []}){
    return(
        <div className="overlay">
            <div className="drawer ">
            <h2 className="d-flex justify-between mb-30 mt-30">
                Корзина<img onClick={onClose} className="removeBtn cu-p" src="/img/plus.svg"alt="Close" /></h2>
            
            {
                items.length >0 ?
            <div><div className="items ">
            
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
                <b>99 999руб. </b>
                </li>
                <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>50 000руб. </b>
                </li>
            </ul>

            <button className="greenButton">Оформить заказ
            <img src="/img/strel.svg" alt="Arrow"/></button>
         </div>
         </div>
            :
             <div className="cartempty d-flex align-center flex-column flex">
                <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="PIZDA"/>
                    <h2>Корзина пустая</h2>
                    <p className="opacity-6">Добавьте хотя бы однин комплект белья, что сделать заказ</p>
                    <button onClick={onClose} className="greenButton"> 
                        <img src="/img/strel.svg" alt="XUY" />
                        Вернуться назад
                    </button> 
            </div>      
            }
  
        </div>
    </div>
    );
}

export default Drawer;