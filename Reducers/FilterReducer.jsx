const FilterReducer =  (State, action) => {
    switch(action.type){
        case "SETGRIDSTYLE":
            return{
                GridStyle: action.payload,
                ...State,
            }
            default : return State;
        }

}

export default FilterReducer;