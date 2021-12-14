import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
<footer class="page-footer font-small blue fixed-bottom">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#/"> Capgemini.com</a>
  </div>
</footer>
);
}

export default Footer;

// import { Link } from "react-router-dom";
// const Footer = () => {

//     return (
//         <footer class="Footer sticky-top">
//             <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
//                 <div class="container">
//                     <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
//                         height="24px" alt="Capgemini" />
//                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarResponsive">
//                         <ul class="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/#" >Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/register" >Register</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login" >Login</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </footer>
//     );
// }

// export default Footer;




// // types of components in react 
// // 1. function components 
// // 2. class components 


// // function component 
// // const footer = () => {

// //     return (
// //         <div className="display-4">
// //             <p>footer Component</p>
// //         </div>
// //     );
// // }
// // export default footer;

// // class component  
// // import React from "react";
// // class footer extends React.Component {

// //     // constructor() { super(); }

// //     render = () => {
// //         return (
// //             <div className="display-4" >
// //                 <p>footer Component</p>
// //             </div>
// //         )
// //     }
// // }
// // export default footer;