import React, { useEffect } from 'react'
import One from "../Modules/Home/One"
import Two from '../Modules/Home/Two'
import Three from '../Modules/Home/Three'
import Four from '../Modules/Home/Four'
import Five from '../Modules/Home/Five'
function Home() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
    </div>
  )
}


export default Home