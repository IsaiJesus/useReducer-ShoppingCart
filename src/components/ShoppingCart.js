import { useReducer } from "react";
import { TYPES } from "../actions/ShoppingAction";
import { shoppingInicialState, shoppingReducer } from "../reducers/ShoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInicialState);
    const {products, cart} = state;

    const addToCart = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    }

    const deleteFromCart = (id, all = false) => {
        if(all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
        }else{
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id})
        }
    }

    const clearCart = () => {
        dispatch({type: TYPES.CLEAR_CART})
    }

    return(
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <div style={{display: "flex"}}>
                {products.map((product) => 
                    <ProductItem key={product.id} data={product} addToCart={addToCart}/>)
                }
            </div>
            <h3>Carrito</h3>
            <button onClick={clearCart}>Limpiar carrito</button>
            {
                cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart}/>)
            }
        </div>
    )
}

export default ShoppingCart;