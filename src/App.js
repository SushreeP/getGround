import { Component } from "react";
import "./App.css";
import Booklist from "./components/Booklist";
import { Pagination } from "@mui/material";
import history from "./history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
    };
  }

  componentDidMount() {
    history.replace("page=" + this.state.pageNumber);
  }

  handlePageChange = (e, pageNumber) => {
    this.setState({ pageNumber });
    history.push("page=" + pageNumber);
  };

  render() {
    return (
      <div className="App">
        <header>GetGround assessment</header>
        <main>
          <div className="content">
            <Booklist pageNumber={this.state.pageNumber} />
          </div>
          <div className="paginator">
            <Pagination
              count={5}
              color="secondary"
              onChange={this.handlePageChange}
            />
          </div>
        </main>
        <footer>
          <p>&copy; Sushree P Mohanty, 17th Feb 2023</p>
        </footer>
      </div>
    );
  }
}

export default App;
