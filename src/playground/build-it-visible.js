let visibility = false;

const toggleVisiability = () => {
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () =>{
const templateTwo = (
    <div>
        <h1>Visibility toggle</h1>
        <button id='butt' onClick={toggleVisiability}>{visibility ? 'Hide details' : 'Show Details'}</button>
        {visibility && (
            <p>Hey! Some details here!</p>    
        )}
        
    </div>
);
ReactDOM.render(templateTwo, appRoot)
}

render();