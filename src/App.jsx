import Header from "./Header";
import Cards from "./Cards";
import Interval from "./Interval";
import Developers from "./Developers";
import Updates from "./Updates";

function App() {
    return (
        <>
            <Header />
            <Interval input_interval={100} />
            <Cards />
            <Interval input_interval={100} />
            <Updates />
            <Interval input_interval={100} />
            <Developers />
        </>
    );
}

export default App;