import React from 'react';
import "./Subtotal.css";
import CurrentFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useHistory} from "react-router-dom";

const Subtotal = () => {
    const history = useHistory();
    const [{ basket },dispatch] = useStateValue();

    return (
        <div className="subtotal">
        <CurrentFormat
        renderText={(value) => (
            <>
            <p>
                {/* Part of the homework*/}
                Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" />This order contain a gift
            </small>
            </>
         )} 
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"₹"}
         />
         <button onClick={e => history.push('/payment')}>process to Checkout</button>
        </div>

    )
}

export default Subtotal;
