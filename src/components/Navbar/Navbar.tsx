import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    	<p>
        	OneUI
      	</p>
		<form>
			<input type="search" name="search" id="search"/>
			<button type="submit">Search</button>
		</form>
		<div>
			<Link to="/">
				Home
			</Link>
			<Link to={'/components'}>
				Components
			</Link>
		</div>
    </nav>
  )
}

export default Navbar