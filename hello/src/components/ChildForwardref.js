import React from 'react'

const  ChildForwardref = React.forwardRef((props,ref)=>{
     return(
       <div>
        <input ref={ref}/>
       </div>
     )
  })

export default ChildForwardref
