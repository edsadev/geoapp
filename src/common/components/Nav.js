import { useCallback, useEffect, useState } from "react";
import { Navbar } from "flowbite-react/lib/esm/components"
import { Link } from "react-router-dom";
import { publicIpv4 } from "public-ip"

const Nav = () => {
  const [ip, setIp] = useState()

  const getInformation = useCallback( async () => {
    const personalIp = await publicIpv4()
    setIp(personalIp)
    },[])
  
  useEffect(() => {
    getInformation()
  }, [getInformation])
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Geo Application
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          to="/"
          active={true}
        >
          Home
        </Link>
        <Link to={`/location/${ip}`}>
          Current location
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav