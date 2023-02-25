import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import { HomeWrapper } from './style'


const Home = memo(() => {
  const {goodPriceInfo} = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo
  }),shallowEqual)



  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(fetchHomeDataAction())
   },[dispatch])

  
  return (
    <HomeWrapper>
      <div className="content">
      <HomeSectionV1 infoData={goodPriceInfo}/> 

      </div>


    </HomeWrapper>
  )
})

export default Home