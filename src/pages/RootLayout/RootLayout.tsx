import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default RootLayout;