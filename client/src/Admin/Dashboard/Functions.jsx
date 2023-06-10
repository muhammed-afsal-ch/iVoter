import React from 'react'
import AddVoter from './Functions/AddVoter'
import AddCandidate from './Functions/AddCandidate'

function Functions() {
  return (
    <div>
        <div style={{display:"flex"}}>
            <AddVoter/>
            <AddCandidate/>
        </div>
    </div>
  )
}

export default Functions