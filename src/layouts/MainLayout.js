import Nav from "../common/components/Nav"

const MainLayout = ({children}) => {
  return (
    <div className="min-h-screen">
      <Nav />
      {children}
    </div>
  )
}

export default MainLayout