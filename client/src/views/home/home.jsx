import { useDispatch } from "react-redux";
import {getGames} from "../../redux/actions"
import Cards from "../../components/cards/Cards";

const Home = () => {

  const dispatch = useDispatch(); 

  dispatch(getGames());
  return (
    <div>
     <Cards/>
    </div>
  );
};

export default Home;
