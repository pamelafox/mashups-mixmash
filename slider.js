var loader_ = window.onload;

window.onload = function() {
  var slides = Array.prototype.slice.call(  // collects all slides in an array
    document.getElementsByTagName("slide") || [], 0);
    
  for (var i = 0, length = slides.length; i < length; ++i)
    button(button(slides[i], 'prev', i, i), 'next', i + 1 < length, i + 2)
      .id = "slide" + (i + 1);  // for each slide, add nav "buttons", init .id

  // Removed <div>s here so that buttons aren't visible
  function button(element, next, add, reference) {
    element.onkeydown = function() {
	  console.log(2313);
	};
    return add && (element.innerHTML += "<a href=#slide" + reference + " " +
      "class='" + next + " nav'></a>"), element;
  }

  var hash = window.location.hash || "#slide1";
  window.location.hash = "",  // clear/reset hash to animate the initial slide
  window.location.hash = hash;

  changebg('1');
  
  document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 32 :  // [ctrl|shift] space
        return slide(event.ctrlKey || event.shiftKey ? '.prev' : '.next');
      case 37 : case 39 :  // left & right arrows
        if (!event.metaKey && !event.altKey)
          return slide(event.keyCode == 37 ? '.prev' : '.next');
  }}, false);

  function slide(direction) {
    var next = document.querySelector(':target > ' + direction + '.nav');
    next && (window.location = next.href);
	
	if (next) {
	  var num = next.href.split('#slide')[1];
	  changebg(num);
	}
  }

  function changebg(num) {
	
	var mapping = {
	 '1': 1,
	 '4': 2,
	 '12': 2,
	 '14': 3,
	 '22': 4,
	 '33': 5,
	 '43': 6,
	 '52': 7
	}
	 
	if (mapping[num]) {
	  document.body.style.background = 'url("images/coverpop' + mapping[num] + '.png")';
	}
  }
  
  loader_ && loader_.call(window);
};


