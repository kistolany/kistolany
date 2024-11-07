import "./Layout.css";
import logo from "../../asset/logo/logo1.jpg"
import { useNavigate ,Outlet} from "react-router-dom";//use for link file to menu
function Layout(){

const naVigate=useNavigate();
const onClickMenu =(routeName)=>{
   naVigate(routeName );
}
// const onClicktobackend =()=>{
//   window.location.href="/dashboard";
// }




    return (
      <div>
        <div>
          <div className="mainHeader">
            <div className="barndContain">
                <img 
                src={logo} 
                style={{width:50,height:50,marginRight:10}}
                />

             <div style={{paddingLeft:10}}>
               <div className="txtBrandName" onClick={()=>onClickMenu("/")}>NIT Cambodia</div>
               <div className="txtSubBrandName">NIT Build IT Skill</div>
             </div>
           </div>

           <div className="menuContain">
             <ul className="menu">
                 <li onClick={()=>onClickMenu("/")} className="menuItem">Home</li>
                 <li onClick={()=>onClickMenu("/about")} className="menuItem">About</li>
                 <li onClick={()=>onClickMenu("/products")} className="menuItem">product</li>
                 <li onClick={()=>onClickMenu("/categories")} className="menuItem">category</li>
                 <li onClick={()=>onClickMenu("/customers")} className="menuItem">Customer</li>
                 <li onClick={()=>onClickMenu("/dashboard")} className="menuItem">Back End</li>
        
             </ul>
           </div>

          </div>
        </div>
        <Outlet/>
        <div style={{marginTop:100,backgroundColor:"ButtonText",height:200}}>Foother</div>
        </div>
    )
}
export default Layout;