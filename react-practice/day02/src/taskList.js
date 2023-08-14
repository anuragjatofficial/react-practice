import React, { Component } from 'react';

class TaskList extends Component{
    render(){
        return(
            <>
            <div>
                <ul>
                    <li>task 1</li>
                    <li>task 2</li>
                    <li>task 3</li>
                </ul>
            </div>
            </>
        );
    }
}

export {TaskList};