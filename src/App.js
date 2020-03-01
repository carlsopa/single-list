import React ,{useState} from 'react';
import List from './components/list';
import Header from './components/header';
import './grocery.css'
const a = {
  'Baking Goods':[],
  'Beverages':[],
  'Bread/Bakery':[],
  'Boxed and Canned Goods':[],
  'Dairy':[],
  'Frozen Foods':[],
  'Grains, Pastas and Nuts': [],
  'Meat':[],
  'Oils, Vinegars and Sauces': [],
  'Other':[],
  'Produce':[],
  'Snacks':[],
  'Spices': []
}
function App() {
  const [list, setList] = useState(a);
  const [alist, setAList] = useState([])
  
  const Add = (p,c,q,crt)=>{
      var found = false;
      var index = 0;

      if(list[c].length>0){
      list[c].map((item,i)=>{
        if(item['product']===p){
          index = i
          found = true
        } 
      })
      } 
        if(found){
          a[c][index]['quantity']=parseInt(a[c][index]['quantity'])+parseInt(q)
        } else {
       a[c].push({product:p,quantity:q,cart:crt})
        }

    setAList(alist=>[...alist,{product:p,quantity:q,cart:crt}])
  }
  const ProductChange = (index,category,value) =>{
            list[category][index]['product']=value
            setList({...list})

  }
  const QuantityChange = (index,category,value) =>{
    list[category][index]['quantity']=value
            setList({...list})

  }
  const CartChange = (index,category) => {
        list[category][index]['cart']=!list[category][index]['cart']
        setList({...list})
  }
  const Delete = (index,category) =>{
    delete list[category][index]
    setList({...list})

  }
  return (
    <div id='app'>
      <h1 id='title'>Grocery List App</h1>
      <Header id='header' cat={list} add={Add}/>
      <List id='body'  set={setList} lst={list} pchg={ProductChange} qchg={QuantityChange} cchg={CartChange} del={Delete}/>
    </div>
  );
}

export default App;
