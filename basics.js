"use strict";
var userName = 'Speed Sharma';
var isLoggedIn = true;
// isLoggedIn += 1; // Error connot be applied to types 'boolean' and 'number'
var myNumbers = 1;
console.log(myNumbers);
var myRegex = /abc/;
var names = userName.split('');
console.log(names);
var myValues = [1, 2, 3];
var myPerson = {
    first: "Sanjeev",
    last: "Sharma",
    phone: 991025246
};
// maps
var ids = {
    10: 'a',
    20: 'b'
};
ids[30] = 'c';
console.log(ids);
if (ids[30] === 'D') { }
for (var i = 0; i <= 10; i++) {
    console.log(i);
}
[1, 2, 3].forEach(function (v) { return console.log(v); });
var out = [5, 6, 7].map(function (v) { return v * 20; });
console.log(out);
