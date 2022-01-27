import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import CurrencyConverter from './components/CurrencyConverter';
import Contact from './components/Contact';
import Navbarmenu from './components/menu/Navbarmenu';
import Cards from './components/cards';

/*Define styles for the drop-down*/ 
const styling = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "150px",
};

// eslint-disable-next-line
class Dropdown extends React.Component {
  constructor(props) {//set up the props
    super(props);
    this.state = { selection: 0 }; //initial selection on the state is 0 
  }
  
  //the value of the selected will be targeted as so set the state as soon as the event (onChange) has occured
 dropDownSelect = e => {
    this.setState({ selection: e.target.value });
  };

//-The render method accepts the two arrays below, dropDownList is what will be mapped over and rendered inside the physical drop-down menu
//-When the user clicks on the chosen item, it will fetch the corresping component
//-The options array is created so that they can be selected
//-What is returned is the div which encapsulates an event listener that waits for the user to click on the drop down to display the list
//-The drop down itema are matched with, the x(to display the list item) and i(to index the list item)
//-According to the item selected, the index number is then assigned to update the state so that the desired component can be rendered.
  render() {
    const dropDownList = ["select", "Currency converter", "Win!"];
    const options = [<CurrencyConverter />, <Cards />];
    return (
      <div>
        <select onChange={this.dropDownSelect}>
          {dropDownList.map((x, i) => (
            <option value={i} key={i}>
              {x}
            </option>
          ))}
        </select>
        {options[this.state.selection]}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        <div style={styling}>
        </div>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/CurrencyConverter" component={CurrencyConverter}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/cards" component={Cards}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
