function Header(props) {
    return( 
        <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="img/mini.png"  />
          <div >
            <h3  className="text-uppercase">REACT LUSHLACE</h3>
            <p className="opacity-5">Магазин кружевного белья</p>
          </div>

      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src="img/cart.svg"  />
        <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="img/Union.svg"  />
        </li> 
      </ul>
    </header>
    );
}

export default Header;