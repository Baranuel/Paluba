import { AnimatePresence, motion , useDragControls} from 'framer-motion'
import React, {useRef}from 'react'

interface PrilohyProps {
    seePrilohy: boolean;
    setSeePrilohy: (value: any) => void;
}

function Prilohy( {seePrilohy, setSeePrilohy}: PrilohyProps) {
    const ref = useRef<HTMLDivElement>(null)

    const handleDrag = (e: any) => {
        if (!ref.current) return
        const vw = window.innerWidth
        const { x } = ref.current.getBoundingClientRect()
        console.log(ref.current.getBoundingClientRect())
        console.log(window.innerWidth)
        const ONE_SIXTH_OF_VW = vw / 6
        if (x > ONE_SIXTH_OF_VW) {
            setSeePrilohy(false)
        }
    }
  return (
        <motion.div
        ref={ref}
        onDragEnd={(e) => handleDrag(e)}
        drag='x'
        dragDirectionLock
        dragConstraints={{top:0, bottom:0, left:0, right:0}}
        key='prilohy'
        initial={{translateX: "100%"}}
        animate={{translateX: 0}}
        exit={{translateX: "100%"}}
        transition={{duration: 0.5, ease: [0.060, 0.975, 0.195, 0.985],}}
        className='h-screen fixed z-50 top-0 right-0 bg-primaryRed w-9/10 shadow-xl' 
        >
        <div className='bg-white w-full h-full'>
            <h1>hello</h1>
        </div>
        </motion.div>
  )
}

export default Prilohy