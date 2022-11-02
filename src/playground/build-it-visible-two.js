class ToggleVisiability extends React.Component {
    constructor(props) {
        super(props);
        this.hendleToggleVisiability = this.hendleToggleVisiability.bind(this);
        this.state = {
            visibility: false
        }
    }
    hendleToggleVisiability() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            }})
    }
    render() {
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button id='butt' onClick={this.hendleToggleVisiability}>{this.state.visibility ? 'Hide details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <p>Hey! Some details here!</p>    
                )}
            </div>
        )
    }
}

ReactDOM.render(<ToggleVisiability />, document.getElementById('app'))
