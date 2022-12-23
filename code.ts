function findMaxSize(){
  let maxWidth = 0;
  let maxHeight = 0;
  for (const node of figma.currentPage.selection) {
    if(node.width > maxWidth){
      maxWidth = node.width;
    };
    if(node.height > maxHeight){
      maxHeight = node.height;
    }
  }
  return ([maxWidth, maxHeight]);
}
function findMinSize(){
  let minWidth = figma.currentPage.selection[0].width;
  let minHeight = figma.currentPage.selection[0].height;
  for (const node of figma.currentPage.selection) {
    if(node.width < minWidth){
      minWidth = node.width;
    };
    if(node.height < minHeight){
      minHeight = node.height;
    }
  }
  return ([minWidth, minHeight]);
}
function findStartPoint(){
  let top = 0;
  let left = 0;
  for (const node of figma.currentPage.selection) {
    console.log(typeof node.x);
    if(node.x < left){
      left = node.x;
    };
    if(node.y < top || top === 0){
      top = node.y;
    }
  }
  return ([left, top])
}
const maxArray = findMaxSize();
const minArray = findMinSize();
// const frameSize = findStartPoint();
for (const node of figma.currentPage.selection) {
  console.log(node.type);
  // node.resize(maxArray[0], maxArray[1]);
  if(figma.command === 'min') {
    node.resize(minArray[0], minArray[1]);
  } else if (figma.command === 'max') {
    node.resize(maxArray[0], maxArray[1]);
  }
}
// const frame = figma.createFrame();
// frame.resize(579, 256);
// frame.x = frameSize[0];
// frame.y = frameSize[1];
// node.layoutMode === 'VERTICAL'
figma.closePlugin('Done');