
import { Link } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.css";
import "../Style/Sidebar.css"
import { useState } from "react";

export default function Sidebar() {
  const [showSubMenu,setShowSubMenu] = useState(false)
  const [subMenuClass, setSubMenuClass] = useState("d-none")



  function changeSubMenuValue () {
    setShowSubMenu(!showSubMenu)
    let subMenuClass = ""
    if(showSubMenu) {
      subMenuClass = "submenu--menu w-100 d-flex justify-content-center flex-column align-items-center "
    }else {
      subMenuClass = "d-none"
    }
    setSubMenuClass(subMenuClass)
  }

  function handleClickMenu() {
    changeSubMenuValue()
  }
  return (
    <>
      <div className="bg-primary sidebar--item d-flex flex-column align-items-center  w-25 h-100">
        
        <div className="w-100 text-center mt-2">
        <p className="menu--item " onClick={handleClickMenu}>Post</p>
        </div>


        <div className={subMenuClass}>
          <Link to="/" className="menu--item  border border-dark w-100 text-center m-0" style={{color:"white"}}><p >All Post</p></Link>
          <Link to="/new" className=" menu--item border border-dark w-100 text-center m-0" style={{color:"white"}}><p >New Post</p></Link>
          
          
        </div>
      </div>
    </>
  );
}

