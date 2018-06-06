const app = "I don't do much."

<<<<<<< HEAD

=======
>>>>>>> bd5bf627f3dfb27664354fe0a4d06c4f28624ca4
function kittens(){
  kittens = ["Milo", "Otis", "Garfield"]
}

<<<<<<< HEAD
=======
kittens()
>>>>>>> bd5bf627f3dfb27664354fe0a4d06c4f28624ca4
function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

<<<<<<< HEAD

=======
kittens()
>>>>>>> bd5bf627f3dfb27664354fe0a4d06c4f28624ca4
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
<<<<<<< HEAD

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
=======
>>>>>>> bd5bf627f3dfb27664354fe0a4d06c4f28624ca4
