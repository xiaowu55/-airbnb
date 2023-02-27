import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeDiscountData, getHomeGoodPriceData,getHomeHighScoreData, getHomeHotRecommandData, getHomeLongforData, getHomePlusData } from "../../services";

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

    getHomeHotRecommandData().then(res=>{
        dispatch(changeRecommendInfoAction(res))
    })

    getHomeLongforData().then(res=>{
        dispatch(changeLongforInfoAction(res))
    })

    getHomePlusData().then(res=>{
        dispatch(changePlusInfoAction(res))
    })


 })


const homeSlice = createSlice({
    name:'home',
    initialState:{
        goodPriceInfo:{},
        highScoreInfo:{},
        homeDiscount:{},
        recommendInfo:{},
        longforInfo:{},
        plusInfo:{}
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
        },
        changeRecommendInfoAction(state,{payload}){
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state,{payload}){
            state.longforInfo = payload
        },
        changePlusInfoAction(state,{payload}){
            state.plusInfo = payload
        },

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
              changeHomeDiscountInfoAction,
              changeRecommendInfoAction,
              changeLongforInfoAction,
              changePlusInfoAction
            } = homeSlice.actions


export default homeSlice.reducer