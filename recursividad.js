const list = [1,2,3,4,5,6,7,8,9,10];
// let number = 0;

for(let i = 0; i < list.length; i++) {
  let number = list[i]
  console.log({i, number});
}

function serie(list) {
  let number = 0;
  if(number < list.length) {
    console.log(list[number])
    list.shift();
    return serie(list);
  }
}

serie(list);