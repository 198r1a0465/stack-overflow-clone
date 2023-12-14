import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import penblack from'../../assets/penblack.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>  
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='18px'/>
                <p>Build vs. buy doesn't matter. 
                    Tool adoption does.
                   sponsored post</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt='pen' width='18px'/>
                <p>CEO update: Giving thanks and building upon our product & engineering foundation</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>  
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='Commentlogo' width='18px'/>
                <p>Update: New Colors are Launched soon.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt='commentlogo' width='18px'/>
                <p>Incident update and uptime reporting is mondatory.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={penblack} alt='blacklogo' width='18px'/>
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={penblack} alt='blacklogo' width='18px'/>
                <p>Beta test for short survey in banner ad slots starting on the week of...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={penblack} alt='blacklogo' width='18'/>
                <p>Collectives updates: new features and ways to get started with Discussions</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>  
            <div className='right-sidebar-div-2'>
                <p>23</p>
                <p> Are low-quality / low-effort questions more likely to be judged as spam or...</p>
            </div>
        </div>

    </div>
  )
}

export default Widget