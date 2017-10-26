var fs = require('fs');
// console.log(fs);
function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
console.log('welcome to use node-copy');