import React, { memo, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { changeHeaderConfigAction } from '../../store/modules/main'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {

  

   const dispatch = useDispatch()
   

   useEffect(()=>{
    
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:false}))
   },[dispatch])

  return (
    <DetailWrapper>
      <DetailPictures/>
    </DetailWrapper>
  )
})

export default Detail