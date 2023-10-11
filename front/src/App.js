import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import useDispatch from "react-redux"
import { getAgent } from "./actions/agent.action";

function App() {
  const {uid, setUid} = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken =async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials: true
    })
    .then((res) => {
      console.log(res);
      setUid(res.data)
    })
    .catch(() => console.log("Pas de tokens"))
    }
    fetchToken()

    if (uid) dispatch(getAgent(uid))
  }, [uid])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
