import React from 'react'

const MemoComp = ({name}) => {
  document.write('memo components')
  return (
    <div>
    {name}
    </div>
  )
}

export default React.memo(MemoComp)
