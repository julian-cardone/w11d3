import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeCart, addCart, decrementCart, updateCart } from "../../store/cart";

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          defaultValue={count}
          onChange={()=>{
            dispatch(updateCart(item.id, item.count))
            setCount(item.count);
          }} // not working yet
        />
        <button
          className="cart-item-button"
          onClick={()=>dispatch(addCart(item.id)) }
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={()=>dispatch(decrementCart(item.id)) }

        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={()=>dispatch(removeCart(item.id)) }
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;