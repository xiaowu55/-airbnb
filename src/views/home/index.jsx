import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyOb } from '../../utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '../../store/modules/main'


const Home = memo(() => {
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo,longforInfo,plusInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.homeDiscount,
    recommendInfo:state.home.recommendInfo,
    longforInfo:state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)



  const dispatch = useDispatch()


 

  useEffect(() => { 
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true}))
   },[dispatch])



  
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {/* <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={discountInfo.dest_list?.[name]}  itemWidth='33.3333%'/>
        </div> */}

      {isEmptyOb(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
      
      {isEmptyOb(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
      {isEmptyOb(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}

     

      {isEmptyOb(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/> }
      {isEmptyOb(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/> }

      {isEmptyOb(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>


    </HomeWrapper>
  )
})

export default Home