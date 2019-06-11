class App extends React.Component{
    
    render(){
        console.log(this.props);
        var chars = ['X', 'Y', 'Z'];
        //var random = chars[Math.floor(((Math.random())*3))];
        return(
            <div>
                <h1>Index!!!</h1>
                <Machine one={chars[Math.floor(((Math.random())*3))]} two={chars[Math.floor(((Math.random())*3))]} three={chars[Math.floor(((Math.random())*3))]} />
                <Machine one={chars[Math.floor(((Math.random())*3))]} two={chars[Math.floor(((Math.random())*3))]} three={chars[Math.floor(((Math.random())*3))]} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));