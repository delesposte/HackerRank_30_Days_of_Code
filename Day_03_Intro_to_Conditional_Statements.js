function main() {
    const n = parseInt(readLine().trim(), 10);    
    if(n % 2 !== 0)console.log('Weird');
    if(n % 2 === 0 && n >= 2 && n <= 5) console.log('Not Weird');
    if(n % 2 === 0 && n >= 6 && n <= 20) console.log('Weird');
    if(n % 2 === 0 && n > 20) console.log('Not Weird');    
}
