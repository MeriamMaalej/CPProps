export const Welcome = props => { 
    console.log(`props:`, props.name); 
    return (
    <button onClick={() => props.alertMyInput("Welcome")}> 
    ClickMe </button>
     ); 
    };
    
