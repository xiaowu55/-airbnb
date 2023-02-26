
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'


const ScrollView = memo((props) => {

    const [showLeft,setShowLeft] = useState(false)
    const [showRight,setShowRight] =  useState(false)
    const [posIndex,setPosIndex] =useState(0)
    const totalDistanceRef = useRef()

    const scrollContentRef = useRef()
    useEffect(() => { 
        const scrollWidth =  scrollContentRef.current.scrollWidth
        const clientWidth  = scrollContentRef.current.clientWidth
        const totalDistance = scrollWidth-clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance>0)
     },[props.children])

     

     function controlClickHandle(isRight){
        const newIndex = isRight ? posIndex + 1 :posIndex-1
        const newEl = scrollContentRef.current.children[newIndex]
        const newElOffsetLeft =  newEl.offsetLeft
        scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
        setPosIndex(newIndex)

        setShowRight(totalDistanceRef.current > newElOffsetLeft)
        setShowLeft(newElOffsetLeft > 0)
     }

  return (
    <ViewWrapper>
        {showLeft &&<div onClick={e=>controlClickHandle(false)} className='control left'><IconArrowLeft/></div>}
        {showRight &&<div onClick={e=>controlClickHandle(true)} className='control right'><IconArrowRight/></div>}

       
        
        <div className="scroll">
            <div className="scroll-content" ref={scrollContentRef}>
                {props.children}
            </div>
        </div>
    </ViewWrapper>
  )
})
 ScrollView.propTypes = {}

export default ScrollView