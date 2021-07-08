import React, { Component } from 'react'
import axios from 'axios';

export class  BestBooks extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            listOfBooks:[],
            email:''
        }
       
    }
    // componentDidMount=()=>{
    //  const   url=`http://localhost:8000/books?email=erada.abdalrhman@gmail.com`;
    //  axios.get(url).then(response =>{
    //      this.setState({
    //          listOfBooks:response.data
    //      })
    //      console.log(response.data);
    //  })
    // }
getUserInput=(e)=>{
this.setState({
    email:e.target.value
})
}
sendRequest=(e)=>{
    e.preventDefault() 
    const   url=`http://localhost:8000/books?email=${this.state.email}`;
     axios.get(url).then(response =>{
         this.setState({
             listOfBooks:response.data
         })
         console.log(response.data);
     }
     )}
    render() {
        return (
            <div>
                <h1>The Best Books list</h1>
                <form>
                    <input type="text" placeholder="seach by email ..." 
                    onChange={(e)=>{this.getUserInput(e)}}/>
                    <button onClick={(e)=>{this.sendRequest(e)}}>Serach for email</button>
                </form>
                <ol>
                    {
   this.state.listOfBooks.map(book =>{
        return <li>{book.name}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default  BestBooks
