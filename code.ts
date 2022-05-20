function findMax(){
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
const maxArray = findMax();
for (const node of figma.currentPage.selection) {
  node.resize(maxArray[0], maxArray[1])
}
figma.closePlugin('Done');