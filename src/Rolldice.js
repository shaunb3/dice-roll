import React ,{Component} from 'react';

let diceArr=["one","two", "three", "four", "five", "six"]

class Rolldice extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {die1:diceArr[0],die2:"one", rolling:false}
    this.roll = this.roll.bind(this)
  }

  roll(){
    let rando1 = Math.floor(Math.random()*6)
    let rando2 = Math.floor(Math.random()*6)
    this.setState({die1:diceArr[rando1], die2:diceArr[rando2], rolling:true})

    setTimeout(()=>{
      this.setState({rolling:false})
    }, 1000)
    
  }
  
  render(){
    return(
    <div>
        <i class={`fas fa-dice-${this.state.die1}`}></i>
        <i class={`fas fa-dice-${this.state.die2}`}></i>
        <button onClick={this.roll} disabled={this.state.rolling}>Roll dice</button>
    </div>
    )
    
  }
}

export default Rolldice