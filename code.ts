function findMaxSize() {
  let maxWidth = 0;
  let maxHeight = 0;
  for (const node of figma.currentPage.selection) {
    if (node.width > maxWidth) {
      maxWidth = node.width;
    }
    if (node.height > maxHeight) {
      maxHeight = node.height;
    }
  }
  return [maxWidth, maxHeight];
}
function findMinSize() {
  let minWidth = figma.currentPage.selection[0].width;
  let minHeight = figma.currentPage.selection[0].height;
  for (const node of figma.currentPage.selection) {
    if (node.width < minWidth) {
      minWidth = node.width;
    }
    if (node.height < minHeight) {
      minHeight = node.height;
    }
  }
  return [minWidth, minHeight];
}
function findStartPoint() {
  let top = 0;
  let left = 0;
  for (const node of figma.currentPage.selection) {
    console.log(typeof node.x);
    if (node.x < left) {
      left = node.x;
    }
    if (node.y < top || top === 0) {
      top = node.y;
    }
  }
  return [left, top];
}
const maxArray = findMaxSize();
const minArray = findMinSize();

for (const node of figma.currentPage.selection) {
  let width, height;

  switch (figma.command) {
    case "align-to-smallest":
      [width, height] = minArray;
      break;
    case "align-to-biggest":
      [width, height] = maxArray;
      break;
    case "align-to-widest":
      width = maxArray[0];
      height = node.height;
      break;
    case "align-to-narrowest":
      width = minArray[0];
      height = node.height;
      break;
    case "align-to-tallest":
      width = node.width;
      height = maxArray[1];
      break;
    case "align-to-shortest":
      width = node.width;
      height = minArray[1];
      break;
  }

  if (width && height && "resize" in node) {
    node.resize(width, height);
  }
}

figma.closePlugin("Done");
