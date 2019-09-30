import React, {Component} from 'react';

class Buttom extends Component{
    render(){
        return(
            <button onClick={
                function(){
                    alert('CLICKED!!')
                }
            }>Click Me!</button>
        )
    }
}

export default Buttom;