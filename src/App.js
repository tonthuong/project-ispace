import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home/Home";
import { Router, Switch, Route } from "react-router-dom";
import {createBrowserHistory} from 'history';
import AnNinhMang from "./page/AnNinhMang/AnNinhMang";
import CEH from "./page/CEH/CEH";
import AWS from "./page/AWS/AWS";
import DangKyNgay from "./page/DangKyNgay/DangKyNgay";
import PhatTrienPhanMem from "./page/PhatTrienPhanMem/PhatTrienPhanMem";
import ThietKeDoHoa from "./page/ThietKeDoHoa/ThietKeDoHoa";
import NotFound from "./page/404/NotFound";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
;
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route exact path="/an-ninh-mang" component={AnNinhMang} />
      <Route exact path="/khoa-hoc-ceh" component={CEH} />
      <Route exact path="/khoa-hoc-aws" component={AWS} />
      <Route exact path="/dang-ky-ngay" component={DangKyNgay} />
      <Route exact path="/phat-trien-phan-mem" component={PhatTrienPhanMem} />
      <Route exact path="/thiet-ke-do-hoa" component={ThietKeDoHoa} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
