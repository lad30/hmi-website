import React from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import {
    clearItemFromCart,
    addItem,
    removeItem
} from '../../redux/cart/cart.actions';


function StripeButton({ cartItems,price,removeItem,clearItem }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hcr59If3Hn5BLfLNdteyaTLDzz6Sf4g9CMEK21WZm7BHjEXbVLl2uqXNK4b9Gex3GBZrZTiP2aqV5QkncN7uasa001eoP4pJr'

    const onToken = token => {
        console.log(token)
        cartItems.forEach((cartItem)=>{
            removeItem(cartItem);
            clearItem(cartItem);
            console.log("cartItem",cartItem);
        })
        
        alert("dummy payment successfull")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name='Threads Ltd.'
            billingAddress
            shippingAddress
            currency="INR"
            image='https://svgshare.com/i/QaG.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(StripeButton)