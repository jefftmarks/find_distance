function findDistance(graph, vertexA, vertexB) {
  const queue = graph[vertexA] ? [graph[vertexA]] : [];
	const visited = new Set(vertexA);

	let distance = 1;

	while (queue.length > 0) {
		const arr = queue.shift();
		if (arr.includes(vertexB)) {
			return distance;
		} else {
			if (queue.length === 0) {
				distance++;
			}
			arr.forEach(vertex => {
				if (!visited.has(vertex)) {
					visited.add(vertex);
					queue.push(graph[vertex]);
				}
			});
		}
	}
	return -1;
}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * Creae empty queue
 * Create visited array
 * Create distance count at 0
 * Add vertexA to queue
 * While queue is not empty:
 * 	take first vertex from queue
 * 	add vertex to visited
 * 	if vertex is equal to target, return distance
 * 	otherwise, iterate through adjacency array of vertex
 * 		if element is not in visited set
 * 			add element to queue
 * 		increase distance
 */
