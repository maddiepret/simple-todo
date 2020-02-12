import React from 'react';
//import css for styling
import './App.css';
//import ListItems to display todo list
import ListItems from './ListItems'
//import font library to access trash icon
import { library } from '@fortawesome/fontawesome-svg-core'
//import trash icon
import { faTrash } from '@fortawesome/free-solid-svg-icons'


//trash icon that was imported
library.add(faTrash)

class App extends React.Component {
    //use constructor for todo list
    constructor(props) {
            super(props);
            this.state = {
                    items: [],
                    currentItem: {
                        text: '',
                        key: ''
                    }
                }
                //bind addItem method to constructor
            this.addItem = this.addItem.bind(this);
            //bind handleInput method to constructor
            this.handleInput = this.handleInput.bind(this);
            //bind deleteItem method to constructor
            this.deleteItem = this.deleteItem.bind(this);
            //bind setUpdate method to constructor
            this.setUpdate = this.setUpdate.bind(this);
        }
        //add method to setState 
    addItem(e) {
            //use preventDefault to not refresh everytime you click on add
            e.preventDefault();
            const newItem = this.state.currentItem;
            //check to see if it is empty, then add to the list
            if (newItem.text !== "") {
                // destructering assignment
                const items = [...this.state.items, newItem];
                this.setState({
                    //set items to new items array
                    items: items,
                    currentItem: {
                        text: '',
                        key: ''
                    }
                })
            }
        }
        //add method to setState 
    handleInput(e) {
            this.setState({
                currentItem: {
                    text: e.target.value,
                    //use date.now as we need a key value and can't leave it blank
                    key: Date.now()
                }
            })
        }
        //delete method
    deleteItem(key) {
        const filteredItems = this.state.items.filter(item =>
            item.key !== key);
        this.setState({
            items: filteredItems
        })

    }
    setUpdate(text,key){
        console.log("items:"+this.state.items);
        const items = this.state.items;
        items.map(item=>{      
          if(item.key===key){
            console.log(item.key +"    "+key)
            item.text= text;
          }
        })
        this.setState({
          items: items
        })


    }
    render(){
        return (
          <div className="App">
            <header>
              <form id="to-do-form" onSubmit={this.addItem}>
                <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
                <button type="submit">Add</button>
              </form>
              <p>{this.state.items.text}</p>
              
                <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
              
            </header>
          </div>
        );
       }
      }
      
      
      export default App;