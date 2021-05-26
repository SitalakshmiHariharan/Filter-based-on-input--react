import React,{Component} from 'react';
import Header from './Components/Header';
import JSON from './JSON/db.json';
import PeopleList from './Components/PeopleList';

class App extends Component{
  constructor(){
    super();
    this.state={
      list:JSON,
      filter:JSON
    }
  }

  filterInput(userInput){
    let output = this.state.list.filter((item)=> {
      return (item.gender.toLowerCase().indexOf(userInput) > -1 || item.email.toLowerCase().indexOf(userInput) > -1)
    })
    console.log(output);
    this.setState({filter:output})
  }

  render(){
    return(
      <div>
        <Header inputSearch={(data)=> {this.filterInput(data)}}/>      
        <PeopleList people={this.state.filter}/> 
      </div>
    );
  }
}

export default App;


/*
const App = () => {
    return (
      <div>
        <Header/>      
        <NewsList/>
      </div>
    );
}
*/