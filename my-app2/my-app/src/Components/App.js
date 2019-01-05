// import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"


// class App extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             todos: todosData
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }
//     handleChange(id){
//         this.setState(prevState=>{
//             const updated=prevState.todos.map(todo=>{
//                 if(todo.id===id){
//                     todo.completed= !todo.completed
//                 }
//                 return todo;
//             })
//             return {
//                 todos: updated
//             }
//         })
//     }
//     render() {
//         // console.log(this.state.todos);
//         const ToDoItems=this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
//         return (
//             <div className="todo-list">
//             {ToDoItems}
//             </div>
//         )
//     }
// }
// export default App

// // import React from "react"

// // Challenge:
// // Given an incomplete class-based component without a constructor, 
// // add a constructor and initialize state to fix the broken component.

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             name:"KO",
//             age:"551"
//         }
//     }
//     render(){
//     return (
//         <div>
//             <h1>{this.state.name}</h1>
//             <h3>{this.state.age} years old</h3>
//         </div>
//     )
//     }    
// }

// export default App

// import React from "react"

// // Given a stateless functional component, add state to it
// // state should have a property called `isLoggedIn` which is a boolean
// // (true if logged in, false if not)
// // Then, give your best shot at rendering the word "in" if the user is logged in
// // or "out" if the user is logged out.

// class App extends React.Component {
    
//     constructor(){
//         super();
//         this.state={
//             isLoggedIn:false
//         }
//     }

//     render(){
//         let text;
//         if (this.state.isLoggedIn) {
//             text = "in ";
//           }else{
//             text = "out ";
//           }
//     return (
//         <div>
//             <h1> You are currently logged {text}</h1>
//         </div>
//     )
// }
// }

// export default App
// import React from "react"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     this.handleClick=this.handleClick.bind(this)
//     }
    
//     handleClick(){
//         this.setState(prevState=>{
//             return{
//                 count:prevState.count+1
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App
// import React from "react"

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             isLoggedIn: true
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }

//     handleChange(){
//         this.setState(PrevState=>{
//             if(PrevState.isLoggedIn){
//                 return { 
//                     isLoggedIn: false
//                 }
//             }else{
//                 return {
//                     isLoggedIn: true
//                 }
//             }
//         })
//     }
//     render(){
//         let text,text1;
//         console.log(this.state.isLoggedIn)
//                 this.state.isLoggedIn ? text="Log-out" : text="Log-in"
//                 this.state.isLoggedIn ? text1="Logged-in" : text1="Logged-out"
//         return (
//             <div>
//                 <h1>User is {text1}</h1>
//                 <button onClick={this.handleChange}>{text}</button>
//             </div>
//         )}
// }

// export default App

// import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }
    
//     componentDidMount() {
//         this.setState({
//             loading: true
//         })
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data =>{
//                     this.setState({
//                         character:data,
//                         loading: false
//                     })
//             })
//     }
    
//     render() {
//         const text =this.state.loading? "loading..." : this.state.character.name
//         return (
//             <div>
//                 {text}
//             </div>
//         )
//     }
// }

// export default App


import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            Age:"",
            gender:"",
            country:"",
                isVegan: false,
                isKosher: false,
                isLactosefree: false
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    handleChange(event){
        const{name, value,type,checked}=event.target
        type==="checkbox"? this.setState({[name]: checked}):this.setState({ [name] : value })
    }

    render() {
        return (
            <main>
                <form>
                    <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name" 
                    onChange={this.handleChange}
                    />
                    <br />
                    <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                    />
                    <br />
                    <input 
                    type="text"
                    name="Age"
                    placeholder="Age" 
                    onChange={this.handleChange}
                    />
                    <br />
                    <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={this.state.gender==="male"}
                    onChange={this.handleChange}
                    />Male
                    <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={this.state.gender==="female"}
                    onChange={this.handleChange}
                    />Female
                    {/* Create radio buttons for gender here */}
                    <br />
                    <label>
                    <select
                    value={this.state.country}
                    onChange={this.handleChange}
                    name="country"
                    >
                    <option value ="Greece">Greece</option>
                    <option value ="Italy">Italy</option>
                    <option value ="Spain">Spain</option>
                    </select>
                    </label>
                    {/* Create select box for location here */}
                    <br />
                    <label>
                    Dietary restrictions 
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange} 
                        checked={this.state.isVegan}
                    />Vegan?
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange} 
                        checked={this.state.isKosher}
                    />Kosher?
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange} 
                        checked={this.state.isLactoseFree}
                    />Lactose Free?
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    </label>
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>
                
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
