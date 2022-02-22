import * as React from 'react';
import {withHooksHOC} from './HOC'

interface HocProps {
    state: number,
    setState: Function
}


class Demo extends React.Component<HocProps> {
    render () {
       return  <div>
           {/* 这里的state和setState来自于customhooks */}
           <div>{ this.props.state }</div>
           <button onClick={() => {
               let v = Math.random() * 1000000
               this.props.setState(v)
           }}>click it</button>
        </div>
    }
}

export default withHooksHOC(Demo)