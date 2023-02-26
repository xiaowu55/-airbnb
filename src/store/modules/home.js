import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeDiscountData, getHomeGoodPriceData,getHomeHighScoreData } from "../../services";

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload,{dispatch}) => { 
    getHomeGoodPriceData().then(res=>{
        dispatch(changeGoodPriceInfoAction(res))

    })
    
    getHomeHighScoreData().then(res=>{
        dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then(res=>{
        dispatch(changeHomeDiscountInfoAction(res))
    })
 })

const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPriceInfo:{},
        highScoreInfo:{},
        homeDiscount:{},
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state,{payload}){
            state.highScoreInfo = payload
        },
        changeHomeDiscountInfoAction(state,{payload}){
            state.homeDiscount = payload
        }
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}){
        //     console.log(payload);
        //     state.goodPriceInfo = payload
        // }
    }

})

export const {changeGoodPriceInfoAction,
              changeHighScoreInfoAction,
              changeHomeDiscountInfoAction} = homeSlice.actions


export default homeSlice.reducer