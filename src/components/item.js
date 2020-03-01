import React from 'react';
import '../grocery.css'

const Card=(props)=>{
	return (
		<li className='item' key={props.value}>

				<input type="checkbox" checked={props.cart} onChange={(e)=>{props.CartChange(props.value, props.category)}}/>
				<input id={'product '+props.value} className='update' 
				type='text' value={props.item} 
				readOnly={props.cart}
				onChange={(e)=>props.Productchange(props.value, props.category, e.target.value)}
				 />
				}

				<span id='qty'>(<input id='itemqty' className='update' 
				type='number' value={props.units} 
				readOnly={props.cart}
				onChange={(e)=>props.QuantityChange(props.value, props.category, e.target.value)}
				 />)</span>
				 <span id='cat'>{props.category}</span>


				<button id='deleteBtn' type='button'
				onClick={(e)=>{props.delete(props.value, props.category)}}>&#10007; delete</button>

		</li>
	)
}
export default Card;