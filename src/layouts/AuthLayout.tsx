import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <main>
        <header>
            Minstry of finace
        </header>
        <Outlet />
    </main>
  )
}

export default AuthLayout