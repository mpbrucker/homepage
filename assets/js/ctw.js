document.getElementById("ctw-text").style.display = "block";
var ctw = project.importSVG(document.getElementById('ctw-text'), {expandShapes: true});
document.getElementById("ctw-text").style.display = "none";
// ctw.scale(5);

var boxes = ctw.children;
console.log(boxes[0].bounds);
boxes[0].width = 285;
boxes[0].height = 478;
console.log(boxes[0].bounds);


project.view.onMouseMove = function(e) {
    // console.log(e.point);
    for (var k=0; k<boxes.length; k++) {
        var text = boxes[k];
        if (text.children !== undefined) {
            for (var i=0;i<text.children.length;i++) {
                for (var j=0;j<text.children[i].segments.length;j++) {
                    var segment = text.children[i].segments[j];
                    var delta = e.point - segment.point;
    
                    var handleDelta = e.point - segment.handleOut;
    
                    if (delta.length < 75) {
                        var normal = delta.rotate(100);
                        segment.point -= normal*0.01;
                        // segment.handleOut -= handleDelta.rotate(100)*0.1;
                    }
                    
                }
                // text.children[i].position += Math.random();
            }
        }
    }
}