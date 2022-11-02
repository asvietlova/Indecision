const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<User name="Andrew" age={26}/>, document.getElementById('app'));


// Exmpl of class component
// class Action extends React.C{
//     render() {
//      return (
//         <div>
//             <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//             >
//                 What should I do?
//             </button>
//         </div>
//     )
// }