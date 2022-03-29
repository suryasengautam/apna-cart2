import React from "react"
class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      productName:'',
      productQuantity:0,
      productPrice:""

    }
    // console.log(this.state);
    // console.log(this.props);
  }
  render() { 
    return (
      <form className="row mb-5 text-warning" onSubmit={(e) => {console.log(this.props);e.preventDefault();this.props.addItems(this.state.productName,this.state.productQuantity,this.state.productPrice)}}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName"     name ="productName" onChange={(e) => {this.setState({productName:e.currentTarget.value})}}  value = {this.state.productName} />
         
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label" >Price</label>
          <input type="number" className="form-control" id="price"     name ="productPrice" onChange={(e) => {this.setState({productPrice:Number(e.currentTarget.value)})}}  value = {this.state.productPrice} />

        </div>
        
        <button type="submit" className="btn btn-primary  col-4" >Add</button>
      </form>
    );
  }
}
 
export default  AddItems ;