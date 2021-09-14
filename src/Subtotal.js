import React from 'react';
import "./Subtotal.css";
import CurrentFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";

const Subtotal = () => {

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
         <button>process to Checkout</button>
        </div>

    )
}

export default Subtotal;
