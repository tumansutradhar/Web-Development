const accountId = 12345;
let accountEmail = "tuman@google.com";
var accountPassword = "12345";
accountCity = "Alipurduar";
let accountState;

// accountId = 2; not allowed
// Don't use var. Issue in block scope & function scope

console.log(accountId);

accountEmail = "ts@ts.com";
accountPassword = "54321";
accountCity = "Kolkata";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState,]);
