const app = "I don't do much."


function kittens(){
  kittens = ["Milo", "Otis", "Garfield"]
}


kittens()

function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}


function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}


function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var kittens2 = kittens.slice(0)
  kittens2.push(name)
  return kittens2
}

function prependKitten(name){
  var kittens2 = kittens.slice(0)
  kittens2.unshift(name)
  return kittens2
}

function removeLastKitten(){
  var kittens2 = kittens.slice(0,kittens.length-1)
  return kittens2
}

function removeFirstKitten(){
  var kittens2 = kittens.slice(1)
  return kittens2
}

