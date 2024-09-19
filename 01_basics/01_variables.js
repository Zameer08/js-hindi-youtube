const accountId = 2323232
let accountEmail = "chaiaurbiscut.com" 
var accountPassword = "19273921731" 
let accountCity = "Dubai" 
/*As you can see the code editor is showing this as an error by underlining it with red and asking us to assign any keyword to it*/

let accountState; 

// accountId = 3 

accountEmail = "shazam.com"
accountPassword = "1234567890" 
accountCity = "Jharkhand" 

console.log(accountId); 

/* prefer not to use var because of issue in block scope and functional scope */ 

console.table([accountEmail, accountPassword, accountCity, accountState
])