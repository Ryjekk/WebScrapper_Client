import {Container, Inner} from "../Styles";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";

function App() {
  return (
    <Container>
        <NavBar/>
        <Inner>
            <SearchBar/>
            <Card/>
        </Inner>

    </Container>
  );
}

export default App;
