const CartItem = ({data, deleteFromCart}) => {

    let {id, name, price, quantity} = data;

    return (
        <div>
            <h3>{name} * {quantity}</h3>
            <h5>${price}</h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem;
