import React, { memo, useState } from 'react'
import IconSearchBae from '@/assets/svg/icon-search-bar'
import { CenterWrapper} from './style'
import SeachTabs from './c-cpns/search-tabs'
import SeachTitles from '../../../../assets/data/search_titles.json'
import SeachSections from './c-cpns/search-sections'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {

 const {isSearch,searchBarClick} = props
  const [tabIndex,setTabIndex] =useState(0)
  const titles = SeachTitles.map(item=>item.title)

  function searchBarClickHandle(){
    if(searchBarClick) searchBarClick()
  }


  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
        <div className="text">
          搜索房源和体验
        </div>
        <div className="icon">
          <IconSearchBae/>
        </div>
        </div> 
      </CSSTransition>

      <CSSTransition
      in={isSearch}
      classNames='detail'
      timeout={250}
      unmountOnExit={true}
      > 
      <div className="search-detail">
        <SeachTabs titles={titles} tabClick={setTabIndex}/>
        <div className="infos">
          <SeachSections searchInfos={SeachTitles[tabIndex].searchInfos}/>
        </div>
      </div>
      </CSSTransition>
    
    </CenterWrapper>
  )
  
})

export default HeaderCenter