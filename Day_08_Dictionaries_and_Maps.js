function addValuesToPhoneBook(phoneBook, values) {
    for(let i = 0; i < values.length; i++) {
        const value = values[i].split(" ");        
        phoneBook.set(value[0], value[1]);
    }     
}

function checkValuesAreInPhoneBook(phoneBook, values) {
    for(let i = 0; i < values.length; i++) {
        const key = values[i]; 
        const value = phoneBook.get(key);            
        if(value) console.log(`${key}=${value}`);
        else console.log("Not found");
    }         
}

function processData(input) {
    const inputs = input.split("\n");
    const phoneBook = new Map();           
    const phoneBookSize = Number(inputs[0]);
    const elements = inputs.slice(1, phoneBookSize + 1);    
    const queries = inputs.slice(phoneBookSize + 1, inputs.length);    
    addValuesToPhoneBook(phoneBook, elements);
    checkValuesAreInPhoneBook(phoneBook, queries);                       
} 
