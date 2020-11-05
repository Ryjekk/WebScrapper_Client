import {Container, Inner} from "../Styles";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";

function App() {
  return (
    <Container>
        <NavBar/>
        <Inner>
            <SearchBar/>
        </Inner>
    </Container>
  );
}

export default App;
