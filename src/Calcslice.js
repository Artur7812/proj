import { createSlice } from "@reduxjs/toolkit";

const Calcslice = createSlice({
    name: 'calc',
    initialState: {
        result: 0,
        current: 0
    },
    reducers: {
        checking(state, action) {                        //actionner                                             
            state.result += action.payload;              //actionner                                                       
        },                                               //actionner                      
        slideingNext(state) {                            //actionner                                         
            state.current += 100                         //actionner                                            
        },                                               //actionner                      
        slideingPrev(state) {                            //actionner                                         
            state.current -= 100                         //actionner                                            
        }                                                //actionner                     
    }
})

export default Calcslice.reducer;
export const { checking, slideingNext, slideingPrev } = Calcslice.actions




