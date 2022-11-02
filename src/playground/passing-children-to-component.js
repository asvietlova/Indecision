import React from 'react';
import ReactDOM from 'react-dom';

// const Layout = (props) => {
//     return (
//         <div>
//         <p>Header</p>
//         {props.content}
//         <p>Footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//     <h1>Page Title</h1>
//     <p>Page content</p>
//     </div>
// );

//ReactDOM.render(<Layout content={template} />, document.getElementById('app'));


//------------------------------------

const Layout = (props) => {
    return (
        <div>
        <p>Header</p>
        {props.children}
        <p>Footer</p>
        </div>
    )
}

ReactDOM.render((
    <Layout>
        <p>This is inline </p>
    </Layout>
    ), document.getElementById('app'));