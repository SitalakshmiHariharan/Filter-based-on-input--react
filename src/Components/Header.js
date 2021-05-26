import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
      super();
      this.state={
          title:"Keyboard Friendz",
          userinput:"Enter what you think"
      }
    }

    inputChange(event){
        this.setState({userinput: event.target.value});
        this.props.inputSearch(event.target.value);
    }

    render(){
            return(
            <header>
                <div className="divv">
                    <h1> {this.state.title} </h1>
                    <input type="text" onChange={this.inputChange.bind(this)}/>
                    <p>{this.state.userinput}</p>
                    <hr/>
                </div>
            </header>
          )
        }
  }

export default Header;


  
  /* Functional Type
  const Header = () => {
    return(
        <React.Fragment>
            <center>
                <h1> This is my header </h1>
                <hr/>
            </center>
        </React.Fragment>
        
    );
}
*/