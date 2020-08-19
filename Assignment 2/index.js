// VERY EASY
// Answer 1
function convert(minutes)
{
  let seconds = minutes*60;
  return minutes + " minutes is equal to " + seconds + " seconds";
}

console.log(convert(5));
console.log(convert(10));
console.log(convert(15));


// Answer 2
function dividesEvenly(a,b)
{
  if(a<b)
    return "a should be greater than or equal to b"
  else if(a%b===0)
    return true;
  else
    return false;
}
console.log(dividesEvenly(5,10));
console.log(dividesEvenly(10,3));
console.log(dividesEvenly(10,5));



// EASY
// Answer 1
function charCount(a,b)
{
  let count = 0;
  let i=0;
  for(i=0;i<b.length;i++)
  {
    if(a===b[i])
    count++;
  }
  return count;
}

console.log(charCount ("c", "Chamber of secrets"));
console.log(charCount('s','Shirin Hasan'));


// Answer 2
function addUp(a)
{
  let sum = 0;
  let i;
  for(i=1;i<a;i++)
  {
    sum=sum+i;
  }
  return sum+a;
}

console.log(addUp (4));
console.log(addUp (13));
console.log(addUp (600));


// Answer 3
function replaceVowel(str)
{
  str = str.replace(/a/g, 1);
  str = str.replace(/e/g, 2);
  str = str.replace(/i/g, 3);
  str = str.replace(/o/g, 4);
  str = str.replace(/u/g, 5);
  return str;
}

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));



// Medium
// Answer 1
function specialReverse(str, letter)
{
	str = str.split(" ");
	let s = "";
  for(let i=0; i<str.length; i++)
  {
    if(str[i].includes(letter))
    {
      for(let j=str[i].length-1; j>=0; j--)
      {
				s = s+str[i][j];
			}
		}
		else{
			s = s+str[i];
		}
		s = s+" ";
	}
	return s;
}

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));


// Answer 2
function testJackpot(arr)
{
  if(arr.length!==4)
  return "Please enter 4 elements"
  else if(arr[0]===arr[1] && arr[1]===arr[2] && arr[2]===arr[3])
  return true;
  else
  return false;
}

console.log(testJackpot(["@", "@", "@", "@"]))
console.log(testJackpot(["abc", "abc", "abc", "abc"]))
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))


// Answer 3
function removeDups(arr)
{
  let i;
  let j;
  for(i=0;i<arr.length;i++)
  {
    for(j=0;j<i;j++)
    {
      if(arr[i]===arr[j])
      arr.splice(i,1);
    }
  }
  return arr;
}

console.log(removeDups ([1, 0, 1, 0, 2]));
console.log(removeDups (["The", "big", "cat"]));
console.log(removeDups (["John", "Taylor", "John"]));
console.log(removeDups(["Shirin","Shirin","Sania"]))



// HARD
// Answer 1
function realType(obj)
{
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
  
console.log(realType(1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));
  

// Answer 2
function numInStr(arr)
{
	let arr2 = [];
  for(let i=0; i<arr.length; i++)
  {
		let x = arr[i];
		let flag = false;
    for(let j=0; j<x.length; j++)
    {
			let y = x[j];
			if(!isNaN(y) && y !== " ")
				flag = true;
		}
		if(flag)
			arr2.push(x);
	}
	return arr2;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));