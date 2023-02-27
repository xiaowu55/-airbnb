import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '../../../../components/room-item'

const EntireRooms = memo(() => {

  const {roomList,totalCount,isLoading} = useSelector((state) => ({ 
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
   }),shallowEqual)

  return (
    <RoomsWrapper>
      <h2 className="titel">{totalCount}多处住所</h2>
       <div className="list">
       {
          roomList.map(item=>{
            return (
              <RoomItem key={item.id} itemData={item} itemWidth="20%"/>
            )
          })
        }
       </div>
       {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms