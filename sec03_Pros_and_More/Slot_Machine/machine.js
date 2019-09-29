
class Machine extends React.Component {  
    render(){
        console.log(this.props);
        const {s1, s2, s3} = this.props;
        const colors = {fontSize: '50px', backgroundColor: 'blue'};
        const winner = (s1 === s2) && (s2 === s3);
        return (
            <div className='machine'>
                   <p style={colors}>{s1}{s2}{s3}</p>
                   <p className={winner ? 'win' : 'loses'}>
                        {winner ? 'Winner!' : 'Loser!'}</p>
            </div>
        );    
    }
}