import React from 'react'

function WidgetTags() {

    const tags =['c','css','express','html','firebase','java','javascript','mern','mongodb','mysql','net.js','node.js','php','python','reactjs']
  return(
      <div className='widget-tags'>
        <h4>Watched WidgetTags</h4>
        <div className='widget-tags-div'>
          {
            tags.map((tag)=>(
                 <p key={tag}>{tag}</p>
            ))
          }
        </div>
        
      </div>
  )
}

export default WidgetTags