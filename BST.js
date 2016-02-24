var array = [8,2,11,13]
var another_array = [8,2,1,13,16,1]
//console.log(array)
var createNode = function(data) {
	return {"value" : data, "left" : null, "right" : null}
}
var arrayToBinaryTree = function(array) {
	for(var i in array) {
		array[i] = createNode(array[i])
		//console.log(createNode(array[i]))
	}
	var rootNode = array[0] 
	for(var j = 1; j < array.length; j++) {
			addNode(rootNode,array[j])
	}
	return rootNode		
}
var addNode = function(currentNode,newNode) {
	if(newNode.value <= currentNode.value) {
		if(currentNode.left == null) {
			currentNode.left = newNode
		}
		else
			addNode(currentNode.left,newNode)
	}
	else 
		if(currentNode.right == null) {
			currentNode.right = newNode
		}
		else
			addNode(currentNode.right,newNode)
}
console.log(array)
console.log(arrayToBinaryTree(array))
console.log("********************************")
console.log(another_array)
var result = JSON.stringify(arrayToBinaryTree(another_array),null,4)
console.log(result)