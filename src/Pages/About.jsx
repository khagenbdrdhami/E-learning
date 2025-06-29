import React, { useEffect } from 'react'
import One from '../Modules/About/One'
import Two from '../Modules/About/Two'
import Three from '../Modules/About/Three'
import Four from '../Modules/About/Four'

function About() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <One/>
      <Two/>
      <Three/>
      <Four/>
    </div>
  )
}

export default About