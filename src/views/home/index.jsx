import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'


const Home = memo(() => {
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.homeDiscount
  }),shallowEqual)



  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(fetchHomeDataAction())
   },[dispatch])

  
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          
        </div>
      <HomeSectionV1 infoData={goodPriceInfo}/> 
      <HomeSectionV1 infoData={highScoreInfo}/> 
      </div>


    </HomeWrapper>
  )
})

export default Home