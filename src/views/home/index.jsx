import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import SectionHeader from '../../components/section-header'
import { fetchHomeDataAction } from '../../store/modules/home'
import HomeBanner from './c-cpns/home-banner'
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
      <HomeBanner/>
      <div className="content">
        <SectionHeader title={goodPriceInfo.title}/>
        <ul>
          {
            goodPriceInfo.list.map(item=>{
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home