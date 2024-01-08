// const chalk = require("chalk")
import chalk from "chalk";
import firstname, { name as last } from "./test.js";
import { v4 as test } from "uuid";
const uniqid = test();
console.log(uniqid);
console.log(firstname, last);
