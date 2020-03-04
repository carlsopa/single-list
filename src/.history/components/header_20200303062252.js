import React, {useState} from 'react';
import '../groceryA.css'

const Header = (props) => {
	const [product, setProduct] = useState('');
	const [quantity, setQuantity] = useState('');
	const [category, setCategory] = useState('');
	const [checkProduct, setCheckProduct] = useState(true)
	const [checkQuantity, setCheckQuantity] = useState(true)
	const [checkCategory, setCheckCategory] = useState(true)
	const [checkNegative, setCheckNegative] = useState(true)


	let cart = false;
	const a = []
		for(let x in props.cat)a.push(x)
	const add = (product,category,quantity,cart) =>{
		if(product && quantity>0 && category){
			props.add(product,category,quantity,cart)
			setCheckProduct(true)
			setCheckQuantity(true)
		} else {
			if(!product){
				setCheckProduct(false)
			} if(!quantity) {
				setCheckQuantity(false)				
			} if(!category){
				setCheckCategory(false);
			} if(quantity<=0 && quantity){
				setCheckNegative(false)
			}
		}
		if(product){
			setCheckProduct(true)
		} if(quantity){
			setCheckQuantity(true)
		} if(category){
			setCheckCategory(true)
		}
		setProduct('')
		setQuantity('')
		setCategory	('')


	}
	return(
		<header>
			<h1 id='title'>Grocery List App</h1>
			<div id='productDiv'>
				<input className={!checkProduct?'alertBox':null} id='product' type="text" placeholder='Grocery Item' value={product} onChange={(e)=>setProduct(e.target.value)} required/><br/>
				{!checkProduct ?<span id='alert'>enter item</span>:null}
			</div>
			<div id='category'>
				<input list='grocery category'  value={category} onChange={(e)=>setCategory(e.target.value)}/>
					<datalist id='grocery category'>
					<option value=''>Category...</option>
					{a.map((x,index)=><option value={x} key={index}>{x}</option>)	}
				</datalist><br/>
				{!checkCategory?<span id='alert'>Choose category</span>:null}
				{!checkNegative?<span id='alert'>Enter a positive number</span>:null}
			</div>
			<div id='quantityDiv'>
				<input className={!checkQuantity?'alertBox':null} id='quantity'  type="number" placeholder='0' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/><br/>
				{!checkQuantity ? <span id='alert'>enter quantity</span>:null}
			</div>
			<br/>
			<button type="button" onClick={(e)=>{add(product,category,quantity,cart)}}>Clickie</button>
		</header>
	)
}
export default Header;