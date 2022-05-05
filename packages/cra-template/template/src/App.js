import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Footer } from './components';
import {
  Home,
  Profile,
  Card,
  Dashboard,
  Search,
  Explore,
  Payment,
  ApplyCard,
  Setting,
  Feature,
  About,
} from './views';
import { PersonList } from './components';
// import ProtectedRoute from './auth/protected-route';
import './App.css';
// import {LoginButton} from "./components/login-button";
// import {LogoutButton} from "./components/logout-button";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save ddd.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />

          <Route path="/card" component={Card} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/personlist" component={PersonList} />
          <Route path="/search" component={Search} />
          <Route path="/explore" component={Explore} />
          <Route path="/payment" component={Payment} />
          <Route path="/applycard" component={ApplyCard} />
          <Route path="/setting" component={Setting} />
          <Route path="/feature" component={Feature} />
          <Route path="/about-us" component={About} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

// export default
// // loginbutton
// App;

export default App;
