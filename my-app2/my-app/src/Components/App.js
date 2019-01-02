import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends React.Component {
    constructor(){
        super()
        this.state={
            todos: todosData
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState=>{
            const updated=prevState.todos.map(todo=>{
                if(todo.id===id){
                    todo.completed= !todo.completed
                }
                return todo;
            })
            return {
                todos: updated
            }
        })
    }
    render() {
        // console.log(this.state.todos);
        const ToDoItems=this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
            {ToDoItems}
            </div>
        )
    }
}
export default App

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
