// function *scuccess(){
//   let large = 150;
//   while(true){
//     yield(large++)
//   }
// }

// let run = scuccess();

// for(let value of run){
//   if(value > 170) break;
//   console.log(value); 
// }

// function *gernators(){
//   let top = [yield,yield,yield];
//   console.log(`top: ${top[1]}`)
// }

// let focus = gernators();

// focus.next()
// focus.next('php')
// focus.next('jahan')
// focus.next(5800)

// we should one value and array set the gernator function

// function *scuccess(){
//   yield "55"
//   yield* ["smart",434234,4878786,"jahah"]
// }

// let love = scuccess();

// console.log(love.next().value)
// console.log(love.next().value)
// console.log(love.next().value)
// console.log(love.next().value)
// console.log(love.next().value)
// console.log(love.next().value)


// sepread operator used in gernators 

// function *userfull(){
//   yield 'php'
//   yield 'pythone'
//   yield 'angular'
//   yield 'javascript'

// }

// let memo = userfull();

// console.log(memo.next().value);
// memo.next();
// console.log([...memo]);



// (return key word) are the use to ending now for the statment

function *userfull(){
  yield 'php'
  yield 'pythone'
  yield 'angular'
  yield 'javascript'

}

let memo = userfull();

console.log(memo.next());
console.log(memo.return('ending now'));




