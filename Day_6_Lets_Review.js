function processElement(element) {
    let evens = '';
    let odds = '';    
    for(let i = 0; i < element.length; i++)
        if(i % 2 === 0) evens = evens + element[i];
        else odds = odds + element[i];
    console.log(`${evens} ${odds}`);       
}

function processData(input) {
    //Enter your code here
    const elements = input.split('\n');   
    for(let i = 1; i < elements.length; i++)
        processElement(elements[i]);       
} 
