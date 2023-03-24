import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
const RootLayout:React.FC = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default RootLayout;