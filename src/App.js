import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/Emptypage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <DayList />
          </Route>
          <Route path='/day/:day'>
            <Day />
          </Route>
          <Route path='/create_word'>
            <CreateWord />
          </Route>
          <Route path='/create_day'>
            <CreateDay />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
        {/* <footer>my voca app footer</footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
