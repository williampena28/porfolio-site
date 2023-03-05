import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Projects = () => {
  return (
    <div className='project-list'>
        <div className='project'>
            <section id='project-card'>
              <Link to='https://mod-3.onrender.com/'><p>React Recipe List Application</p></Link>
              <div className='project-wrap'>
                <img src='https://res.cloudinary.com/dsszlkvhh/image/upload/v1678036669/Untitled_wyydp6.png' width='500' height='500' alt='project'/>
                <p>Using the free version of <Link to='https://www.themealdb.com/api.php'>themealdb api</Link>, this application lets
                users look up over 100+ recipes straight from their database and save them to a bookmark page where they are able to
                add, read, update instructions, and remove their bookmarks if they want to. All bookmark data are then saved onto a database.
                </p>
              </div>
            </section>
            <section id='project-card'>
              <p>Mod 2 Project</p>

              <div className='project-wrap'>
                <img src='https://res.cloudinary.com/dsszlkvhh/image/upload/v1678036377/images/Untitled_wtbogx.png' width='500' height='500' alt='project'/>
                <p>In this application, users are able to create and read their own store products which are then displayed onto the front page.
                Users are also able to update and delete their products entirely. All products are then saved onto a database when created.
                </p>
              </div>
            </section>
        </div>
    </div>
  )
}

export default Projects