// npm i -g bundle-npm & cd workspace
// input(must) file(must) format(must) name(must) mini(option)
// bundle-npm --input upng-js --file bundle.js --format umd --name UPNG --mini  # bundle a npm module 'upng-js'
// bundle-npm --input ./index.js --file bundle.js --format umd --name UPNG --mini  # bundle by entry file './index.js'
// so 'bundle-npm --input index.js' != 'bundle-npm --input ./index.js'

const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;
const argv = require('yargs').argv;
const relative = require('require-relative');

/**
 * args: input file format name mini
 */

let input = argv.input;// must
input = relative.resolve(input, process.cwd());
let file = argv.file;// must
let format = argv.format;// must
let modeleName = argv.name;// must
let mini = argv.mini;// option

let plugins = [
    resolve(),
    commonjs()
];
if (mini) {
    plugins.push(uglify());
}

const inputOptions = { input, plugins };
const outputOptions = { file, format, name: modeleName, sourcemap: true, exports: 'named' };

async function build() {
    try {
        const bundle = await rollup.rollup(inputOptions);// create a bundle
        // console.log(bundle.imports); // an array of external dependencies
        // console.log(bundle.exports); // an array of names exported by the entry point
        // console.log(bundle.modules); // an array of module objects
        const { code, map } = await bundle.generate(outputOptions);// generate code and a sourcemap
        await bundle.write(outputOptions);// or write the bundle to disk
    } catch (error) {
        console.error((error as Error).message);
        console.error((error as Error).stack);
    }
}

build();