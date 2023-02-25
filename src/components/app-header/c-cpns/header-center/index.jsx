import React, { memo } from 'react'
import IconSearchBae from '@/assets/svg/icon-search-bar'
import { CenterWrap } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrap>
      <div className="search-bar">
      <div className="text">
        搜索房源和体验
      </div>
      <div className="icon">
        <IconSearchBae/>
      </div>
      </div>
    </CenterWrap>
  )
})

export default HeaderCenter