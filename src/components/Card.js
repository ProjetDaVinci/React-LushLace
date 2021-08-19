function Card(){
    return(
    <div className="card">
    <div className="favorite">
    <img src="/img/heartlike.svg" alt="Unliked"/>
    </div>
    
    <img width={270} height={350} src="img/1.jpg" alt="Comp"/>
    <h5>Красивый комплект ляяляляdadadada dadadadadadadadadadada</h5>
    <div className="d-flex justify-between align-center">
     <div className="d-flex flex-column">
       <span>Цена:</span>
       <b>12 999 руб.</b>
     </div>
     <button className="button"> 
     <img width={11} height={11} src="img/Group 91.svg" alt="Plus"/>
     </button>
    </div>
    </div>
    );
}

export default Card;


