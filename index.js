var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// node index.js --input upng-js --file b.js --format umd --name test --mini
var rollup = require('rollup');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify').uglify;
var argv = require('yargs').argv;
var relative = require('require-relative');
/**
 * args: input file format name mini
 */
var input = argv.input;
input = relative.resolve(input, process.cwd());
var mini = argv.mini;
var file = argv.file;
var format = argv.format;
var modeleName = argv.name;
var plugins = [
    resolve(),
    commonjs()
];
if (mini) {
    plugins.push(uglify());
}
var inputOptions = { input: input, plugins: plugins };
var outputOptions = { file: file, format: format, name: modeleName, sourcemap: true, exports: 'named' };
function build() {
    return __awaiter(this, void 0, void 0, function () {
        var bundle, _a, code, map, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, rollup.rollup(inputOptions)];
                case 1:
                    bundle = _b.sent();
                    return [4 /*yield*/, bundle.generate(outputOptions)];
                case 2:
                    _a = _b.sent(), code = _a.code, map = _a.map;
                    return [4 /*yield*/, bundle.write(outputOptions)];
                case 3:
                    _b.sent(); // or write the bundle to disk
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.error(error_1.message);
                    console.error(error_1.stack);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
build();
//# sourceMappingURL=index.js.map