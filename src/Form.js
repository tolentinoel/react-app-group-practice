import React from 'react'

class Form extends React.Component{

    constructor(){
        super()
        this.state={
          field: ''
        }
      }

    handleChange = (e) => {

        this.setState({
            field: e.target.value

        })

    }

    render(){
        return(
            <div>
                <h2>Hello y'all</h2>
                <form id='form'>
                    <label htmlFor='field'>Type Something: </label>
                    <input type='text' name='field' onChange={this.handleChange} maxLength='20'></input>
                </form>
                <h3>{this.state.field}</h3>
            </div>
        )
    }








}

export default Form