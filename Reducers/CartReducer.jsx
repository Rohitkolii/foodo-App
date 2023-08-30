
const CartReducer = (State, action) => {

  if(action.type === "ADDTOCART") {
    let {idMeal, strMeal, strMealThumb, strCategory, Quantity, price, Product} = action.payload;
    


    let esisting = State.Cart.find((elm)=> elm.id == idMeal+strMeal)

    if(esisting){
      let updated = State.Cart.map((elm)=> {
        if(elm.id = idMeal+strMeal){
          let NewQuantity = elm.Quantity + Quantity;
          return{
            ...elm,
            Quantity : NewQuantity,
          }
        }
        else{
          return elm;
        }
      })
      return{
        ...State,
        Cart: updated
      }
    } else{
        let productCart= {
          id: idMeal+strMeal,
          name: strMeal,
          image: strMealThumb,
          Quantity,
          Category: strCategory,
          price,
        }
        
    
        return {
          ...State,
          Cart: [ ...State.Cart, productCart],
        }
      }


  }

  if(action.type === "SETINCREMENT"){
    let updatedproduct = State.Cart.map((elm) => {
      if(elm.id === action.payload){
        let inc = elm.Quantity + 1;

        return{
          ...elm,
          Quantity:inc
        }
      } else{
        return elm;
      }
    })
    return {...State, Cart: updatedproduct}
  }

  if(action.type === "SETDECREMENT"){
    let updatedproduct = State.Cart.map((elm) => {
      if(elm.id === action.payload && elm.Quantity > 1){
        let dec = elm.Quantity - 1;
        return{
          ...elm,
          Quantity:dec
        }
      } else{
        return elm;
      }
    })
    return {...State, Cart: updatedproduct}
  }

  if(action.type === "REMOVECARTITEM"){
    let RUpdatedCart = State.Cart.filter((elm)=> {
      return elm.id !== action.payload;
    })
    // console.log(RUpdatedCart)
    return{
      ...State, Cart: RUpdatedCart
    }
  }


  }
export default CartReducer