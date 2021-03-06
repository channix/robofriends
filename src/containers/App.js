import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { robots } from "../robots"; //robots.js



class App extends Component{
    constructor(){
        super()
        this.state= {           
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        this.setState({ robots: robots });
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response=>  response.json())
        //     .then(users => {this.setState({robots: users})} );
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }

    render(){
        const { robots, searchfield} = this.state;
            const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
            <center><h1>Loading</h1></center> :
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/> 
                        </ErrorBoundary>
                    </Scroll>
                </div> 
            );
        }
        
        
}
    

export default App;