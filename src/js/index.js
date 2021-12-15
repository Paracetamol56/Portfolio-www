$(document).ready(function () {
  let codeBlocksBackground = document.getElementById("codeBlocksBackground");

  // get the grid size of the codeBlocksBackground
  var gridSize = [
    $(codeBlocksBackground).css("grid-template-columns").split(" ").length,
    $(codeBlocksBackground).css("grid-template-rows").split(" ").length
  ];

  let grays = [
    "#343739",
    "#2d3032",
    "#26292b",
    "#1f2224",
    "#191c1e",
  ];

  // list of predifined colors
  let colors = [
    "#b4e2f9",
    "#5f78ef",
    "#8251e9",
    "#ad56e3",
    "#df7bf5",
  ];

  let randomCharacters = ['-', '_', '+', '=', '*', '&', '^', '%', '$', '#', '@', '!', '~', '`', '<', '>', '?', ':', ';', '.', ',', '|', '\\', '/', '{', '}', '[', ']', '(', ')', '"', "'"];

  // for each cell of the grid
  for (var i = 0; i < gridSize[0]; i++) {
    for (var j = 0; j < gridSize[1]; j++) {
      // If the cell is lucky
      if (Math.random() <= 0.7) {
        // create a p element in this cell
        var codeBlock = document.createElement("p");
        codeBlock.className = "bgCodeBox";

        var randomContent = "";
        // generate a random content in a list of random types
        var randomNumber = Math.random();
        if (randomNumber <= 0.25) {
          // generate 4 lines of 8 random characters in hexadecimal
          for (var k = 0; k < 4; k++) {
            randomContent += Math.random().toString(16).substr(2, 8).toUpperCase();
            randomContent += '\n';
          }
        }
        else if (randomNumber <= 0.5) {
          // generate a random number of random characters in binary
          var randomNumber = Math.floor(Math.random() * 8) + 1;
          for (var k = 0; k < 4; k++) {
            randomContent += Math.random().toString(2).substr(2, 8).toUpperCase();
            randomContent += '\n';
          }
        }
        else if (randomNumber <= 0.9) {
          // generate a random character
          for (var k = 0; k < 4; k++) {
            for (var l = 0; l < 8; l++) {
              randomContent += randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
            }
            randomContent += '\n';
          }
        }
        else {
          randomContent = "////////\n////////\n////////\n////////";
        }

        codeBlock.innerHTML = randomContent;

        // random color from the list of grays
        var randomColor = grays[Math.floor(Math.random() * grays.length)];
        codeBlock.style.setProperty("--bgCodeBox-color", randomColor);

        // random color from the list of colors
        var randomColor = colors[Math.floor(Math.random() * colors.length)] + "50";
        codeBlock.style.setProperty("--bgCodeBox-hover-color", randomColor);

        codeBlock.style.gridColumn = i + 1;
        codeBlock.style.gridRow = j + 1;

        // append the codeBlock to the codeBlocksBackground
        codeBlocksBackground.appendChild(codeBlock);
      }
    }
  }
});


