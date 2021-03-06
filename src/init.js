$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      650 * Math.random() + 120,
      1200 * Math.random() + 300,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(element) {
      element.$node.css('top', '500px');
    });
  });

  $('.pairUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length;) { 
      var left = window.dancers[i].left + 70;
      left = left.toString() + 'px';
      var top = window.dancers[i].top;
      top = top.toString() + 'px';
      window.dancers[i + 1].$node.css({left: left, top: top});
      i = i + 2;
    }
  });
  $('.stinkyDancer').on('hover', function(event) {

  });
});

