import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Books} />
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

// from PUPSTER

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/discover" component={Discover} /> */}
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;