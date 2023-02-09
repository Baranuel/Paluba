import { AnimatePresence, motion , useDragControls} from 'framer-motion'
import React, {useRef}from 'react'

interface PrilohyProps {
    seePrilohy: boolean;
    setSeePrilohy: (value: any) => void;
}

function Prilohy( {seePrilohy, setSeePrilohy}: PrilohyProps) {
    const ref = useRef<HTMLDivElement>(null)

    const handleDrag = (() => {
        if (!ref.current) return

        const vw = window.innerWidth
        const { x } = ref.current.getBoundingClientRect()
        const ONE_EIGHT_OF_VW = vw / 8
        if (x > ONE_EIGHT_OF_VW) {
            setSeePrilohy(false)
        }
    })
    
  return (
        <motion.div
        ref={ref}
        onDragEnd={() => handleDrag()}
        drag='x'
        dragDirectionLock
        dragConstraints={{top:0, bottom:0, left:0, right:0}}
        key='prilohy'
        initial={{translateX: "100%"}}
        animate={{translateX: 0}}
        exit={{translateX: "100%"}}
        transition={{duration: 0.75, ease: [0.060, 0.975, 0.195, 0.985],}}
        className='h-screen fixed z-50 top-0 right-0 bg-primaryRed w-9/10 shadow-xl' 
        >
        <div className='bg-white w-full h-full'>
            <h1>hello</h1>
        </div>
        </motion.div>
  )
}

export default Prilohy