// thank you to @markE and his stackoverflow answer here: https://stackoverflow.com/questions/23939588/how-to-animate-drawing-lines-on-canvas#23941786

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
        timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}());


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineCap = "round";

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// (function() {
//   window.addEventListener('resize', resizeCanvas, false);
//
//   function resizeCanvas(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//
//     drawStuff();
//   }
//   resizeCanvas();
//
//   function drawStuff(){
//
//   }
// })();

// variable to hold how many frames have elapsed in the animation
var t = 1;

// define the path to plot
var left_path = [];
// var mid_path = [];
// var right_path = [];
//
// //push points to rightmost path
// right_path.push({
//     x: canvas.width/2,
//     y: 0
// });
// right_path.push({
//     x: canvas.width/2,
//     y: 70
// });
// right_path.push({
//     x: canvas.width-10,
//     y: 150
// });
// right_path.push({
//     x: canvas.width-10,
//     y: 200
// });
// right_path.push({
//     x: canvas.width/2,
//     y: 300
// });
// right_path.push({
//     x: canvas.width/2,
//     y: 400
// });
//
// //push points to middle path
// mid_path.push({
//     x: canvas.width/2,
//     y: 0
// });
// mid_path.push({
//     x: canvas.width/2,
//     y: 70
// });
// mid_path.push({
//     x: canvas.width/2,
//     y: 150
// });
// mid_path.push({
//     x: canvas.width-10,
//     y: 200
// });
// mid_path.push({
//     x: canvas.width/2,
//     y: 300
// });
// mid_path.push({
//     x: canvas.width/2,
//     y: 400
// });

//push points to leftmost path
left_path.push({
    x: canvas.width/2,
    y: 0
});
left_path.push({
    x: canvas.width/2,
    y: 70
});
left_path.push({
    x: 10,
    y: 150
});
left_path.push({
    x: 10,
    y: 200
});
left_path.push({
    x: canvas.width/2,
    y: 300
});
left_path.push({
    x: canvas.width/2,
    y: 400
});

// console.log("right path: " + right_path);
// console.log("mid path: " + mid_path);
console.log("left path: " + left_path);

// draw the complete line
// ctx.lineWidth = 1;
// // tell canvas you are beginning a new path
// ctx.beginPath();
// // draw the path with moveTo and multiple lineTo's
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 100);
// ctx.lineTo(80, 200);
// ctx.lineTo(10, 100);
// ctx.lineTo(0, 0);
// // stroke the path
// ctx.stroke();


// set some style
ctx.lineWidth = 4;
ctx.strokeStyle = "green";
// calculate incremental points along the path
var left_points = calcWaypoints(left_path);
animate();
t = 1;

// var mid_points = calcWaypoints(mid_path);
// animateMid();
// t = 1;
// //
// var right_points = calcWaypoints(right_path);
// animateRight();
// t = 1;

// var points = [];
// points.push(left_points);
// points.push(mid_points);
// points.push(right_points);

// for each(point in points)
//   animate(point);
// });
// extend the line from start to finish with animation
// animate(points);





// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}


function animate() {
    if (t < left_points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(left_points[t - 1].x, left_points[t - 1].y);
    ctx.lineTo(left_points[t].x, left_points[t].y);
    ctx.stroke();

    // if (t < mid_points.length - 1) {
    //     requestAnimationFrame(animate);
    // }
    // // draw a line segment from the last waypoint
    // // to the current waypoint
    // ctx.beginPath();
    // ctx.moveTo(mid_points[t - 1].x, mid_points[t - 1].y);
    // ctx.lineTo(mid_points[t].x, mid_points[t].y);
    // ctx.stroke();
    //
    // if (t < right_points.length - 1) {
    //     requestAnimationFrame(animate);
    // }
    // // draw a line segment from the last waypoint
    // // to the current waypoint
    // ctx.beginPath();
    // ctx.moveTo(right_points[t - 1].x, right_points[t - 1].y);
    // ctx.lineTo(right_points[t].x, right_points[t].y);
    // ctx.stroke();
    //increment "t" to get the next waypoint
    t++;
 }

 // function animateMid(){
 //   if (t < mid_points.length - 1) {
 //       requestAnimationFrame(animate);
 //   }
 //   // draw a line segment from the last waypoint
 //   // to the current waypoint
 //   ctx.beginPath();
 //   ctx.moveTo(mid_points[t - 1].x, mid_points[t - 1].y);
 //   ctx.lineTo(mid_points[t].x, mid_points[t].y);
 //   ctx.stroke();
 //
 //   t++;
 // }
 //
 // function animateRight(){
 //   if (t < right_points.length - 1) {
 //       requestAnimationFrame(animate);
 //   }
 //   // draw a line segment from the last waypoint
 //   // to the current waypoint
 //   ctx.beginPath();
 //   ctx.moveTo(right_points[t - 1].x, right_points[t - 1].y);
 //   ctx.lineTo(right_points[t].x, right_points[t].y);
 //   ctx.stroke();
 //
 //   t++;
 // }
