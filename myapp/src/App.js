import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

   state = {
      ninjas: [
         { name: 'Ryu', age: 30, belt: 'black', id: 1 },
         { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
         { name: 'Crystal', age: 25, belt: 'pink', id: 3 },
         { name: 'Abdullah', age: 39, belt: 'black', id: 4 },
         { name: 'Sirac', age: 18, belt: 'red', id: 5 }
      ]
   }

   addNinja = (ninja) => {
      ninja.id = Math.random();
      // console.log(ninja);
      let ninjas = [...this.state.ninjas, ninja];

      this.setState({
         ninjas : ninjas
      })
   }

   deleteNinja = (id) => {
      // console.log(id);
      let ninjas = this.state.ninjas.filter(ninja => {
         return id !== ninja.id;
      })
      this.setState({
         ninjas : ninjas
      })
   }

   render() {
      return (
         <div className="App">
            <h1>My First React App...</h1>
            <p>WELCOME :->></p>
            <br />
            <br />
            <hr />
            <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
            <AddNinja addNinja={this.addNinja}/>
         </div>
      );
   }  

}

export default App;
