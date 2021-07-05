import React, { Component } from 'react'
import axios from 'axios'
export class Form extends Component {
    
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    getInput=(e)=>{
        this.setState({
            data:e.target.value
        })
        console.log(this.state.data)
    }

    requestData=(e)=>{
        e.preventDefault()
        let catName=this.state.data
        axios.get(`http://localhost:8000/?catname=${catName}`).then(res=>{
            console.log(res)
        }).catch(err=>{console.log(err)})
    }
    render() {
        return (
            <div>
                <form>
                    <h2>Enter your Favourit Book</h2>
                    <input type="text" onChange={this.getInput}/>
                    <button onClick={(e)=>this.requestData(e)}>submit</button>
                </form>
            </div>
        )
    }
}

export default Form