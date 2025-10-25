import {Header} from "antd/es/layout/layout";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout  = ({children}:LayoutProps)=>{
  return <div  style={{background:"#F5F5F5",overflowY:"scroll"}} className={"h-dvh"}>

      <Header style={{height:'90px',background:'#040D40'}}></Header>



    {children}
  </div>;
}

export default Layout;