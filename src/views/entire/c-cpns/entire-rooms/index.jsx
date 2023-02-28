import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { RoomsWrapper } from './style'
import RoomItem from '../../../../components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '../../../../store/modules/detail'

const EntireRooms = memo((props) => {


  const {roomList,totalCount,isLoading} = useSelector((state) => ({ 
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
   }),shallowEqual)


   const navigate = useNavigate()
   const dispatch = useDispatch()
   const itemClickHandle = useCallback((item) => { 
    
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
    },[navigate,dispatch])

  return (
    <RoomsWrapper>
      <h2 className="titel">{totalCount}多处住所</h2>
       <div className="list">
       {
          roomList.map(item=>{
            return (
              <RoomItem  
              key={item.id} 
              itemData={item} 
              itemWidth="20%"
              itemClick={itemClickHandle}
              />
            )
          })
        }
       </div>
       {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms