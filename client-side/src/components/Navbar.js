import { Link } from "react-router-dom"



function Navbar() {
  return (
    <div>
      
      <Link>
      <button>Home</button>
      </Link>
      
      
      <Link to='/phones' >
      <button>Phones</button>
      </Link>
      
    </div>
  )
}

export default Navbar