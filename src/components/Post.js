
import { Link, useParams } from 'react-router-dom'
import React from 'react'

function Post() {
    const params = useParams();
    // const status = 200;
    // if(status = 404){
    //   return <Link to='/notfound'></Link>
    // }
  return (
    <div>
      POST <br />
      <h2>{params.id}</h2>
      <h2>{params.name}</h2>
    </div>
  )
}

export default Post
