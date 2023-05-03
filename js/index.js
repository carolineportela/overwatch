var svg = document.querySelector('svg');
var goldDarkRing = svg.querySelector('.gold-dark-ring');
var goldRing1 = svg.getElementById('gold-ring-1');
var goldRing2 = svg.getElementById('gold-ring-2');
var goldRing3 = svg.getElementById('gold-ring-3');

var grayRing1 = svg.getElementById('gray-ring-1');
var grayRing2 = svg.getElementById('gray-ring-2');
var grayRing3 = svg.getElementById('gray-ring-3');
var grayRing4 = svg.getElementById('gray-ring-4');

function animate(obj) {
    
  // Variable for current element
  var el = obj.element;
  
  // Total durations for each animation type
  var svg_dur = 0,
      css_dur = 0;
  
  for (var i = 0; i < obj.svg.length; i++) {
    svg_dur += obj.svg[i].duration;
  }
  
  for (var i = 0; i < obj.css.length; i++) {
    css_dur += obj.css[i].duration;//
  }

  // Get radius of the circle
  var rad = el.getAttribute('r');
  // Get the necessary length for future equations
  var len = (2 * Math.PI * rad);
  
  var transObj = {
    svg: '',
    css: ''
  }
    
  window.requestAnimationFrame(function() {
      // SVG Animations
  setInterval(function() {
        
    var counter = 0;
    
    for (var i = 0; i < obj.svg.length; i++) {

      (function(counter, obj, index) {
        setTimeout(function() {
          
          var startVal = obj.svg[index].startVal,
              endVal = obj.svg[index].endVal,
              duration = obj.svg[index].duration,
              easing = obj.svg[index].easing;
          
          // Sets the dash array
          el.style.strokeDasharray = len + ' ' + len;
          
          el.style.transition = el.style.WebkitTransition = transObj.svg + ', ' + transObj.css;

          // Sets the starting stroke-dashoffset
          el.style.strokeDashoffset = len * startVal;

          // Hack
          el.getBoundingClientRect();

          // Sets transition for stroke-dashoffset
          transObj.svg = 'stroke-dashoffset ' + duration + 's ' + easing;
          
          el.style.transition = el.style.WebkitTransition = transObj.svg + ', ' + transObj.css;
          
          
          // GO!
          el.style.strokeDashoffset = len * endVal; 
          
          
        }, counter * 1000);
    })(counter, obj, i);
      
      counter += obj.svg[i].duration;
      
    }
    
  }, (svg_dur * 1000));
  
  // CSS Animations
  setInterval(function() {
            
    var counter = 0;
    
    for (var i = 0; i < obj.css.length; i++) {

      (function(counter, obj, index) {
        setTimeout(function() {
          
          var regex = /^-?\d*\.{0,1}\d+$/;
                    
          var initial = obj.css[0].initial || undefined;
                    
          var rotation = parseInt(el.style.transform.replace(/[^-^\d]/g, '')) || initial || 0;
                              
          var duration = obj.css[index].duration,
              deg = obj.css[index].deg + rotation,
              easing = obj.css[index].easing   
          
          transObj.css = 'transform ' + duration + 's ' + easing;
          
          el.style.transition = el.style.WebkitTransition = transObj.svg + ', ' + transObj.css;
                    
          el.style.transform = 'rotate(' + deg + 'deg)';
                              
        }, counter * 1000);
    })(counter, obj, i);
      
      counter += obj.css[i].duration;
            
    }
    
  }, (css_dur * 1000));
  });
  
}  
// Dark Gold Ring
animate({
  element: goldDarkRing,
  svg: [{
    startVal: 0.4,
    endVal: 0,
    duration: 1.5,
    easing: 'ease-in'
  },
       {
    startVal: 0,
    endVal: 0.4,
    duration: 0.5,
    easing: 'ease-out'
  }],
  css: [{
    duration: 1.5,
    deg: 360,
    easing: 'linear',
  },
       {
        duration: 0.5,
        deg: 720,
        easing: 'ease-out'
        }]
});
// // Gold Ring 1
animate({
  element: goldRing1,
  svg: [
    {
      startVal: 0.975,
      endVal: 0.975,
      duration: 1,
      easing: 'linear'
    }
  ],
  css: [
    {
      duration: 3,
      deg: -360,
      easing: 'linear'
    }
  ]
});
// // Gold Ring 2
animate({
  element: goldRing2,
  svg: [
    {
      duration: 1.5,
      startVal: 0.95,
      endVal: 0.7,
      easing: 'ease-in'
    },
    {
      duration: 1.5,
      startVal: 0.7,
      endVal: 0.95,
      easing: 'ease-out'
    }
  ],
  css: [
    {
      duration: 1.5,
      easing: 'ease-out',
      deg: 180
    },
    {
      duration: 1.5,
      easing: 'ease-in',
      deg: 180
    }
  ]
});
// Gold Ring 3
animate({
  element: goldRing3,
  svg: [
    {
      duration: 1.5,
      startVal: 0.95,
      endVal: 0.7,
      easing: 'ease-in'
    },
    {
      duration: 1.5,
      startVal: 0.7,
      endVal: 0.95,
      easing: 'ease-out'
    }
  ],
  css: [
    {
      initial: 135,
      duration: 1.5,
      easing: 'ease-out',
      deg: 180
    },
    {
      duration: 1.5,
      easing: 'ease-in',
      deg: 180
    }
  ]
});
// Gray Ring 1
animate({
  element: grayRing1,
  svg: [
    {
      startVal: 0.96,
      endVal: 0.96,
      duration: 1,
      easing: 'linear'
    }
  ],
  css: [
    {
      initial: 45,
      duration: 1.5,
      deg: -180,
      easing: 'ease-out'
    },
    {
      duration: 1.5,
      deg: -180,
      easing: 'ease-in'
    }
  ]
});
// Gray Ring 2
animate({
  element: grayRing2,
  svg: [
    {
      startVal: 0.985,
      endVal: 0.985,
      duration: 1,
      easing: 'linear'
    }
  ],
  css: [
    {
      initial: -45,
      duration: 3,
      deg: -360,
      easing: 'linear'
    },
  ]
});
// Gray Ring 3
animate({
  element: grayRing3,
  svg: [
    {
      startVal: 0.9,
      endVal: 0.9,
      duration: 1,
      easing: 'linear'
    }
  ],
  css: [
    {
      initial: -45,
      duration: 3,
      deg: 360,
      easing: 'linear'
    },
  ]
});
// Gray Ring 4
animate({
  element: grayRing4,
  svg: [
    {
      startVal: 0.9,
      endVal: 0.9,
      duration: 1,
      easing: 'linear'
    }
  ],
  css: [
    {
      initial: 180,
      duration: 1.5,
      deg: 180,
      easing: 'ease-out'
    },
    {
      duration: 1.5,
      deg: 180,
      easing: 'ease-in'
    }
  ]
});
  
