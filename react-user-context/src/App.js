// import "./App.css";
import { UserProvider, useUser } from "./UserContext";


const LoggedInUser = () => {
  const { user } = useUser();
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
  const { user } = useUser();
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

      <div className="App">
        <Header />
        <Page />
      </div>

  );
}
function Root() {
  return(
    <UserProvider>
      <App/>
    </UserProvider>
  )
}
export default Root;
