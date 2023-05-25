const nickName= "Timmy";
const firstName= "Timothy";

if(nickName === null || undefined ) console.log('Good Morning, ${name}')

if(firstName === null || undefined) console.log('Good Morning, ${nickName}')

if(nickName && firstName === null || undefined) console.log('Good Morning')

console.log('Good Morning, ${nickName} || ${firstName}!') 