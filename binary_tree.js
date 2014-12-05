function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(value){

  if (value === this.value) return alert("node exists");
  // check root for left (true) or right(false)
  if (value < this.value){
    //left
    if (this.left === null) { // check for null
      this.left = new BinTree(value); //set left if null
    }
    else{
      this.left.insert(value);
    }
  }
  //else for right
  else {
    if (this.right === null) {
      this.right = new BinTree(value); //set right if null
    }
    else{
      this.right.insert(value);
    }
  } //end else for right
  return this; //return the tree at the end
}; //end insert function


BinTree.prototype.isLeaf = function(){
  return this.left === null && this.right === null;
};


BinTree.prototype.search = function(value){
  if (this.value === value) {
    return true;
  }
  else if (this.isLeaf()) {
    return false; //if value at a leaf and not found end of line
  }
  else {
    //ternary for recursive search call
    return value < this.value ? this.left.search(value) : this.right.search(value);
  }
};


try{
  module.exports = BinTree;
} catch(e){

}
