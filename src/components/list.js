import React from 'react';
import Card from './item';
import '../grocery.css'


const List = (props) =>{
 let a = []
 for(let x in props.lst){
 	for(let y in props.lst[x]){
 		a.push({data:props.lst[x][y],category:x,index:y})
 	}	
 }		

	return(
		<div id='body'>
		<div id='find'>
			<h3>To Find:</h3>
			<ul>
				{
					a.map((item,index)=>item.data.cart===false?
					<Card key={index} index={item.index} category={item.category}
					value={item.index} cart={item.data.cart} item={item.data.product} 
					units={item.data.quantity} unitType={item.type} 
			 		Productchange={props.pchg} QuantityChange={props.qchg} CartChange={props.cchg} delete={props.del}/>:null)
				}
			</ul>
			</div>
			<div id='found'>
			<h3>Found:</h3>
			<ul>
				{
					a.map((item,index)=>item.data.cart===true?
					<Card key={index} index={item.index} category={item.category}
					value={item.index} cart={item.data.cart} item={item.data.product} 
					units={item.data.quantity} unitType={item.type} 
			 		ProductChange={props.pchg} CartChange = {props.cchg} delete={props.del}/>:null)
				}
			</ul>
			</div>
		</div>
	)
}
export default List;