"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const serve = (port, filename, dir) => {
    console.log('serving traffic on port', port);
    console.log('saving/fetching cells from', filename);
    console.log('file is in directory', dir);
};
exports.serve = serve;
