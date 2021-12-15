import { createSlice } from "@reduxjs/toolkit";
import NgoModel from "../model/NgoModel";

const NgoSlice = createSlice({
    name:'ngo',

    initialState: {

        ngoState: new NgoModel(),
        ngoStateLocation: [],
        ngoStateMotive: [],
        ngoList:[]
    },

    reducers: {
        getNgoById: (state, action) => {
            console.log("NgoSlice reducers getNgoById");
            state.ngoState = action.payload;
        },

        getNgoByLocation: (state, action) => {
            console.log("NgoSlice reducers getNgoByLocation");
            state.ngoStateLocation = action.payload;
        },

        getNgoByMotive: (state, action) => {
            console.log("NgoSlice reducers getNgoByMotive");
            state.ngoStateMotive = action.payload;
        },

        getAllNgo: (state, action) => {
            console.log('NgoSlice reducers getAllNgo');
            state.ngoList = action.payload;
        }
    }
}

);

export const {getNgoById , getAllNgo , getNgoByLocation , getNgoByMotive} = NgoSlice.actions;
export default NgoSlice.reducer;


//





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