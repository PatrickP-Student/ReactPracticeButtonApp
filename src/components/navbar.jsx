import React from "react";
// import { Component } from "react";

//stateless functional component, since this component does not need a state, and we pass
//everything it needs to it via props of its parent component
function NavBar({ totalCounters }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Total Counters:
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </span>
      </div>
    </nav>
  );
}

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">
//             Total Counters:
//             <span className="badge badge-pill badge-secondary m-2">
//               {this.props.totalCounters}
//             </span>
//           </span>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
