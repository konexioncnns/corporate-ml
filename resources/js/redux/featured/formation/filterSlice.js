const { createSlice } = require("@reduxjs/toolkit");


const initialState ={
    searchText:'',
}

const filterSlice = createSlice({
    name:"recherche",
    initialState,
    reducers:{
        search(state,action){
            state.searchText=action.payload
           
        },
    },
    extraReducers:{

    }

})
export const {search} = filterSlice.actions;
export default filterSlice.reducer;