// import "./App.css";
import { UserProvider, useUSer } from "./UserContext";


const LoggedInUser = () => {
  const { user } = useUSer();
  return (
    <p>
      Hello <span className="UserName">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};
const Page = () => {
  const { user } = useUSer();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor dit fjknlzr nfruf jfelk jande jbfeu jfyrhj ljdiedjhf
        jfurfbdzj jfrylznbcdua^bf bralkbcd kbc jbcae cvker debfrfr zzzzhfr bnfr
        ncrniolabcr cryzajbcr ncefhrmlac cne
      </p>
      <p>Written by {user.name} {user.email}</p>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Page />
      </div>
      </UserProvider>
  );
}
// function Root() {
//   return(
//     <UserProvider>
//       <App/>
//     </UserProvider>
//   )
// }
export default App;
