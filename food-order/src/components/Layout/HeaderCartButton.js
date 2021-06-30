
import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cartContext"
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCart.module.css"
const HeaderCartButton = (props) => {

    const [btnHighlight, setBtnHighLight] = useState(false)

const cartContext = useContext(CartContext);
const { items } = cartContext;
useEffect(() => {
    if(items.length === 0){
        return;
    }
    setBtnHighLight(true)

   const timer = setTimeout(() => {
        setBtnHighLight(false)
    }, 400);

    return () => {
        clearTimeout(timer)
    }
},[items])
const btnClasses = `${classes.button} ${btnHighlight? classes.bump: ''}`
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
            <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{items.reduce((currNum, item)=> currNum + item.amount, 0)}</span>
        </button>
    )
}

export default HeaderCartButton;