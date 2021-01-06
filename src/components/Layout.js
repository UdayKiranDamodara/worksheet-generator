import React from 'react';
import Problem from './Problem';
import './styles/Layout.css'

function Layout(props) {
    const list = []
    for( var i=0;i<20;i++){
        list.push(<Problem fixed={props.myNum} />);
    }
    return (
        <div className='page'>
            {list}
        </div>
    )
}

export default Layout;