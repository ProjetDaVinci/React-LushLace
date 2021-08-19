import Card from './components/Card'
import Header from './components/Header'
import Draw from './components/Drawer'

function App() {
  return <div className="wrapper сlear">
    
    <Draw/>
    
    <Header/>
    
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 >Все комплекты</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search"/>
          <input placeholder="Поиск.."/>
        </div>
      </div>
      

      <div className="d-flex">
        
        <Card/>
        <div className="card">
          <img width={270} height={350} src="img/2.jpg" alt="Comp"/>
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
      
        <div className="card">
          <img width={270} height={350} src="img/4.jpg" alt="Comp"/>
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

        
      </div>
       
      
      
    </div>
    </div>
};

export default App;
