import React from 'react'
import PropTypes from 'prop-types'
const Nav = ({name, children}) => {
  return (
    <div className= 'nav' >
        <h3>{name}<br/>
            JOSHUA 
        </h3>

        <h3>FRONTEND DEVELOPER<br/>
            FOLIO/2021-2023
        </h3>

        <h3>OPEN TO WORK AND<br/>
            FREELANCE GIGS
        </h3>

        <button type="button" className='btn'>CONTACT</button>

        {/* {children} */}
    </div>
  )
}
Nav.defaultProps ={
    name: "ONIFADE",
}
Nav.propTypes = {
    name: PropTypes.string.isRequired,

}
export default Nav