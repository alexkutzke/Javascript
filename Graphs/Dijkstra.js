/**
 * Author: Samarth Jain
 * Dijkstra's Algorithm implementation in JavaScript
 * Dijkstra's Algorithm calculates the minimum distance between two nodes.
 * It is used to find the shortes path.
 * It uses graph data structure.
 */

function createGraph(vertices, edges) {
  // vertices - Number of vertices in graph
  // edges - Number of edges in graph (u,v,w)
  const minimumDistance = []; // Adjacency list
  for (let i = 0; i < vertices; i++) {
    minimumDistance.push([]);
  }
  for (let i = 0; i < edges.length; i++) {
    minimumDistance[edges[i][0]].push([edges[i][1], edges[i][2]]);
    minimumDistance[edges[i][1]].push([edges[i][0], edges[i][2]]);
  }
  return minimumDistance;
}

function parentNode(graph, vertices, src) {
  const verticesArray = Array(vertices).fill(0);
  const distanceFromNode = [];
  for (let i = 0; i < vertices; i++){
   distanceFromNode.push([10000, -1]);
  }
  distanceFromNode[src][0] = 0;

  for (let i = 0; i < vertices - 1; i++) {
    let minimum = -1;
    for (let j = 0; j < vertices; j++) {
      if (verticesArray[j] === 0) {
        if (minimum === -1 || distanceFromNode[j][0] < distanceFromNode[minimum][0]) minimum = j;
      }
    }

    verticesArray[minimum] = 1;
    for (let j = 0; j < graph[minimum].length; j++) {
      const edge = graph[minimum][j];
      if (verticesArray[edge[0]] === 0 && distanceFromNode[edge[0]][0] > distanceFromNode[minimum][0] + edge[1]) {
        distanceFromNode[edge[0]][0] = distanceFromNode[minimum][0] + edge[1];
        distanceFromNode[edge[0]][1] = minimum;
      }
    }
  }

  return distanceFromNode;
}

const vertices = 9;
const edges = [
  [0, 1, 4],
  [0, 7, 8],
  [1, 7, 11],
  [1, 2, 8],
  [7, 8, 7],
  [6, 7, 1],
  [2, 8, 2],
  [6, 8, 6],
  [5, 6, 2],
  [2, 5, 4],
  [2, 3, 7],
  [3, 5, 14],
  [3, 4, 9],
  [4, 5, 10],
];

const graph = createGraph(vertices, edges);
const distances = parentNode(graph, vertices, 0);
/**
 * The first value in the array determines the minimum distance and the
 * second value represents the parent node from which the minimum distance has been calculated
 */

console.log(distances)
