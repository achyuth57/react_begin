import React from 'react'

// function ForwordingRef() {
//     return (
//         <div>
//            <input type='text' />
//         </div>
//     )
// }

const ForwordingRef = React.forwardRef((props, refs) =>{
    return (
                <div>
                   <input type='text' ref={refs } />
                </div>
            )
})

export default ForwordingRef
