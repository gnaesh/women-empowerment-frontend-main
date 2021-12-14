import { createSlice } from "@reduxjs/toolkit";
import NgoModel from "../model/NgoModel";

const NgoSlice = createSlice({
    name:'ngo',

    initialState: {

        ngoState: new NgoModel(),
    },

    reducers: {
        getNgoById: (state, action) => {
            console.log("NgoSlice reducers getNgoById");
            state.ngoState = action.payload;
        }
    }
}

);

export const {getNgoById} = NgoSlice.actions;
export default NgoSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit";
// import Ngo from "../model/Ngo";

// // step 3 for redux - create slices for each components 
// const NgoSlice = createSlice({

//     name: 'ngo',

//     initialState: {
        
//         ngoState: new Ngo(),
//         ngoList: []


//     },

//     reducers: {

//         getNgoById: (state, action) => {
//             console.log('NgoSlice reducers getNgoById');
//             state.ngoState = action.payload;
//         },
//     }
// });

// export const { getNgoById} = NgoSlice.actions;

// export default NgoSlice.reducer;