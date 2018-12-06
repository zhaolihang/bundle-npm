// node index.js --input upng-js --file b.js --format umd --name test --mini

const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;
const argv = require('yargs').argv;

//args: input file format name mini

let input = argv.input;
input = require.resolve(input);
let miniify = argv.mini;
let file = argv.file;
let format = argv.format;
let modeleName = argv.name;

let plugins = [
    resolve(),
    commonjs()
];
if (miniify) {
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
    }
}

build();