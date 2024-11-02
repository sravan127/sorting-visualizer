import React from 'react'

function Bar({key, height}) {
    const styles ={
        "height": `${height*2}%`,
        "backgroundColor" : "black",
        "width" : "20px"
    }
  return (
    <span style={styles} key={key}>
        
    </span>
  )
}

export default Bar