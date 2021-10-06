# react-js-thousand-seperator
## A package where you can format number in group of thousands and get desired unit of decimal values.

### Syntax 

```
thousandSeperator(digits,decimal_allowed)
eg: thousandSeperator(50000.333,1)
// output: 50,000,3
```


### Example:1

### In this example we are only converting number into decimal formatted number without decimal seperation.

````
const number = 50000;
const output = thousandSeperator(number,0)
console.log(output) //50,000
````

### Example:2

### In this example we are converting number into decimal formatted number with decimal seperation.

````
const number = 50124.11111;
const output = thousandSeperator(number,2)
console.log(output) //50,124.11
````

For more details please visit [here](https://medium.com/@noffybarudwale/javascript-format-numbers-with-commas-and-decimals-86b68ec5b180)

If you figure out any issue please feel free to update it [here](https://github.com/nikhilgarware/number-formatter/issues)