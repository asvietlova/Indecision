let count = 0;

const addOne = () => {
    count++;
    console.log('plus one');
    renerCounterApp();
}
const minusOne = () => {
    count--;
    console.log('minus one');
    renerCounterApp();
}
const reset = () => {
    count = 0;
    console.log('reset');
    renerCounterApp();
}

const appRoot = document.getElementById('app');

const renerCounterApp = () => {
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
ReactDOM.render(templateTwo, appRoot)
};
renerCounterApp();