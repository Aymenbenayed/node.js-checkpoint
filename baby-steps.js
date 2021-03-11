var sum = 0 

process.argv.slice(2).forEach(function (arg) {
sum += +arg;
});

console.log(sum);