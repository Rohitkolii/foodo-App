const ProductReducer = (State , action) => {
    switch(action.type){
        
        case "PRODUCTS_LOADING":
            return{
                ...State,
                isLoading: true,
                isError: false,
            }
            
            case 'ERROR':
                return{
                    isLoading: false,
                    isError: true,
                    ...State
                };
            
        case 'ALLPRODUCTS':
            return{
                ...State,
                Products: action.payload,
                isLoading:false,
                isError:false,
            };
        case 'SINGLELOADING': 
        return{
            ...State,
            isSingleLoading:true,
            isSingleError:false,
        }

        case 'SINGLEPRODUCTS':
            return{
                ...State,
                SingleProduct:action.singlepayload,
                isSingleLoading:false,
                isSingleError:false,
            }

        case 'SINGLEERROR':
            return{
                isSingleError:true,
                isSingleLoading:false,
                ...State
            }
            default : return State
        }

    }
// return State

export default ProductReducer;