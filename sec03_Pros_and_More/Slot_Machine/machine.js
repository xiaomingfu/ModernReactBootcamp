
class Machine extends React.Component {
    render(){
        function isIdentical(){
            if(arrs[0] === arrs[1] && arrs[0] === arrs[2]){
                return "You win!"
            }else{
                return "You lose!"
            }
        }
        const arrs = this.props.arr;
        let answer = isIdentical();
        return (
            <div>
                <div>
                    {arrs}
                </div>
                <div>
                    {answer}
                </div>
            </div>
        )
        
    }
}