// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop(-1);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(0);
}

function appendDriver(name){
  const newArray = [...drivers, name];
  return newArray;
}

function prependDriver(name){
  const newArray = [name, ...drivers];
  return newArray;
}

function removeLastDriver(){
  const newArray = drivers.split(0,-1)
  return newArray;
}

