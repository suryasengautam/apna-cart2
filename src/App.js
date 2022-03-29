import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar"
import ProductList from "./components/ProductList";
import React , {useState} from "react";
import Footer from "./components/Footer";
import AddItems from "./components/AddItems"
function App() {
  const products = [
    {
      price: 150000,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
    {
      price: 27999,
      name: "APPLE iPhone SE",
      quantity: 0,
    },
    {
      price: 11999,
      name: "realme C35",
      quantity: 0,
    },
  ];
  let [productList,setProductList] = useState(products);
  let [totalAmount,setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++
    newTotalAmount = newTotalAmount + newProductList[index].price;
    // if (newProductList[index].quantity > 0){
    //   newProductList[index].quantity--;
    //   newTotalAmount-= newProduct[index].price;
    // }

    // newProductList[index].quantity++;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);

  }
  const decrementQuantity = (index) => {
    let newTotalAmount = totalAmount;
    let newProductList = [...productList];
      if (newProductList[index].quantity > 0){
      newProductList[index].quantity--;
      newTotalAmount-= newProductList[index].price;
    }
    newProductList[index].quantity--;
    setProductList(newProductList);

  }
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0)
  }
  const removeItem= (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount = newTotalAmount -newProductList[index].quantity*newProductList[index].price;
    console.log(newProductList);
    newProductList.splice(index, 1);
    console.log(newProductList);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }
  const addItems = (name, quantity, price)=> {
    let  newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity:0

    })
    setProductList(newProductList);
  }
  return (
    <>
    <Navbar/>
    <main className="container mt-5">
      <AddItems addItems={addItems}/>
    <ProductList productList = {productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} removeItem = {removeItem}/>

    </main>
    <Footer totalAmount = {totalAmount} resetQuantity= {resetQuantity}/>
    </>
  );
}
export default App;
