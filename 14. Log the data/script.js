//CHALLENGE 1
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log("Surprising fact: ", surprisingFact);

console.log(`Surprising fact:  ${surprisingFact}`);

console.log("********************");

//CHALLENGE 2
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

function printFamilyTree(tree, level = 0) {
  tree.forEach((person) => {
    console.log(`${" ".repeat(level * 2)}- ${person.name}`);
    if (person.children) {
      printFamilyTree(person.children, level + 1);
    }
  });
}
console.log("********************");
printFamilyTree(familyTree);

console.log("********************");

console.log(JSON.stringify(familyTree, null, 2));

console.log("********************");

// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

let count = 0;

function importantTask() {
  count++;
  console.log(`important task called. count: ${count}`);
  if (count === 4) {
    count = 0;
  }
}

importantTask();
importantTask();
importantTask();
importantTask();
importantTask();
importantTask();
