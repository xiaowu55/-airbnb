import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'

import RoomItem from '@/components/room-item'
import ScrollView from '../../../../base-ui/scroll-view'

const HomeSectionV3 = memo((props) => {

    const {infoData} = props

  return (
    <SectionV3Wrapper>
        <SectionHeader title={infoData.title} subtitile={infoData.subtitile}/>
        <div className="room-list">
           <ScrollView>
           {
                infoData.list.map(item=>{
                    return <RoomItem itemWidth='20%' itemData={item} key={item.id}/>
                })
            }
           </ScrollView>
        </div>
        <SectionFooter/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV3