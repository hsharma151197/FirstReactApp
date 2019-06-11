class Machine extends React.Component {
    render(){
        console.log(this.props);
        var one = this.props.one;
        var two = this.props.two;
        var three = this.props.three;
        return(
            <div>
                <h1>Hi from Machine!</h1>
                <div>{one === two && two === three ? "Winner" : "Looser"}</div> 
                <p>{this.props.one}</p><p>{this.props.two}</p><p>{this.props.three}</p>   
            </div>
        );
    }
}