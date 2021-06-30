import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
    const [amountValid, setAmountValid] = useState(true);
    const amountRef = useRef()

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = +amountRef.current.value.trim();
        if(enteredAmount < 1 || enteredAmount > 5) {
            setAmountValid(false);
            return
        }

        props.onAddToCart(enteredAmount)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
           <Input
                ref={amountRef}
                label="Amount" input={{
               id: 'amat' + props.id,
               type: "number",
               min: '1',
               max: '5',
               step: '1',
               defaultValue: '1'
           }} />

            <button className={classes.button}> + Add</button>
            {!amountValid && <p>Please Enter a valid Amount (1-5)</p>}
        </form>

    )
}

export default MealItemForm