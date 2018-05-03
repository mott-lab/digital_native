function restartThreadAnimation() {
  console.log("restartThreadAnimation called.");
  console.log("restartForkAnimation called.");
  var container = document.getElementById("model-thread");
  var content = container.innerHTML;
  container.innerHTML = content;
  console.log("Thread Animation refreshed.");
  // var svgDoc = document.getElementById('model-thread');
  // svgDoc.forceRedraw();
  // svgDoc.clearInterval();
  // SVGRoot.pauseAnimations();
}

function restartForkAnimation() {
  console.log("restartForkAnimation called.");
  var container = document.getElementById("model-fork");
  var content = container.innerHTML;
  container.innerHTML = content;
  console.log("Fork Animation refreshed.");
}

(function($){
  console.log("setiframeHeight called");
  var h = $("#portfolioModal1").height();
  console.log("height " + h);
  $("#iframe-1").height(h-40);
})(jQuery);

//function to toggle the visibility of the underscores
(function($){
  $.fn.visible = function() {
      return this.css('visibility', 'visible');
  };

  $.fn.invisible = function() {
      return this.css('visibility', 'hidden');
  };

  $.fn.visibilityToggle = function() {
      return this.css('visibility', function(i, visibility) {
          return (visibility == 'visible') ? 'hidden' : 'visible';
      });
  };

  var toggle_visibility = setInterval(function(){
    $("#underscore").visibilityToggle();
  }, 500);
})(jQuery);
