
import { ExpandableCardDemo } from '@/components/user/dashboard/courses/Course'
import { TypewriterEffectSmoothDemo } from '@/components/user/dashboard/courses/CourseTitle'

import { FloatingDockDemo } from '@/components/user/FloatinDock'
import React from 'react'

const page = () => {
  return (
    <div>
       
       <TypewriterEffectSmoothDemo />
        <ExpandableCardDemo /> 
        
        <div className=" flex  w-full items-center   fixed z-50 bottom-5">
        <FloatingDockDemo />
        </div>
       

    </div>
  )
}

export default page