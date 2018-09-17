import React, { Component } from 'react';
class Calc extends Component {
	constructor(props){
    	super(props);
        const arrayValues = this.createNewQuestions();
        this.state = {
        	val1: arrayValues[0],
        	val2: arrayValues[1],
            val3 : arrayValues[2],
            answer: arrayValues[3]        
        };    
    }

	createNewQuestions = () => {
    	const val1 = Math.floor( Math.random() * 100 );
        const val2 = Math.floor( Math.random() * 100);
        const val3 = Math.floor( Math.random() * 100 );        
        const answer = Math.floor( Math.random() * 3 ) + (val1 + val2 + val3);
        return [val1, val2, val3, answer];    
    }
    
    updateState = newArrayValues => {
    	this.setState( (currState) =>({
        	val1 :newArrayValues[0],
            val2:newArrayValues[1],
            val3 : newArrayValues[2],
            answer : newArrayValues[3]        
        }));
    
    }
    
    
    handleAnswer = event => {
    	const newArrayValues = this.createNewQuestions();
        this.updateState(newArrayValues);
    	const answerWasCorrect = this.evaluateAnswer(event.target.name);
        this.props.handleAnswer(answerWasCorrect);
    }
    
    evaluateAnswer(givenAnswer){
    	const { val1, val2, val3, answer } = this.state;
    	const corrAnswer = val1+ val2+ val3;
        return (
        	( corrAnswer === answer && givenAnswer === 'true' ) ||
        	( corrAnswer !== answer && givenAnswer === 'true' )
        );
    }    
    
    render(){    
    	const { val1 , val2, val3, answer } = this.state;
    	return(
        	<div>
            	<div className="equation">
        			<p className="text">
        				{ ` ${val1} + ${val2} + ${val3} = ${answer} `}                   
                    </p>
        		</div>
        		<button name="true" onClick={this.handleAnswer} >True</button>
                <button name="false" onClick={this.handleAnswer}>False</button>                
        	</div>
        );    
    }
}

export default Calc;