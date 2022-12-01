import { fstat, readFileSync } from "fs";
import * as fs from 'fs';

const elvesSnacks = fs.readFileSync('./caloriesData.txt', 'utf-8').split('\n\n');
const calories = elvesSnacks.map(group => {
  return group.split('\n').map(group => Number(group)).reduce((prev,curr) => prev+curr, 0);
})

const sortedCalories = calories.sort((a,b) => b-a);
const threeElves: number[] = [];
for(let i = 0; i <3; i++){
  threeElves.push(sortedCalories[i]);
}
const solution = threeElves.reduce((prev,curr)=> prev+curr);
console.log(solution);