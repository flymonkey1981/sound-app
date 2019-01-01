import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
import {compileOptions, compileHash} from './RouterUtils'

it('renders without crashing', () => {
    var obj = {a:1, b: 2, c: 3};
   console.log(compileOptions(obj));

   var route = {path: 'index', keys:'keys', options: obj};
   console.log(compileHash(route));
});