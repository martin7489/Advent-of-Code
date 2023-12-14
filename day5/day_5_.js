// *************  PART 1: Problem statement *************
/*

seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4
*/
//***********************************************


const fs = require('fs');
const filePath = '/Users/ewa.szyszka/Desktop/AoC/Advent-of-Code/day5/input.txt';


fs.readFile(filePath, 'utf8', (err, data) => {

     //Spliting data based on empty line
    const input = data.split("\n\n");

    //Extracting the data from input.txt
    const seeds = input[0].split(" ").map((x) => parseInt(x.trim()));


    console.log(input[0], seeds);

});