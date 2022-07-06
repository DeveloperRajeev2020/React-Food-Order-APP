import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items[0].length > 0;
//console.log(hasItems);

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    }
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items[0].map((item) => (
                // <li key={index}>{item.name}</li>
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null,item.id)}
                onAdd={cartItemAddHandler.bind(null,item)}
                />
            ))}
        </ul>
        
    );
    return (
        <Modal onClose={props.onClose}>
            <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;