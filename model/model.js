function nameChange() {
    let name = document.getElementById('myName');
    name.style.color = 'darkblue';
    name.style.background = 'gold';
    name.innerHTML = 'Leonie';
    setTimeout(nameChange2, 9000);
  }
  
  setTimeout(nameChange, 9000);
  
  function nameChange2() {
    let name = document.getElementById('myName');
    name.style.color = 'gold';
    name.style.background = 'darkblue';
    name.innerHTML = 'Leonora';
    setTimeout(nameChange, 9000);
  }
  
  // Made with Zdog
  
  let isSpinning = true;
  
  let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    zoom: 1.2,
    dragRotate: true,
    // stop spinning when drag starts
    onDragStart: function() {
      isSpinning = false;
    },
  });
  
  // circle
  var ellipse1 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    translate: {z: 180, x: 90},
    stroke: 20,
    color: '#636',
  });
  
  // circle
  var ellipse2 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 120,
    translate: {z: 120, x: 60},
    stroke: 20,
    color: '#03d',
    fill: false,
  });
  
  var ellipse3 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 160,
    translate: {z: 60, x: 30},
    stroke: 10,
    color: '#23a',  
  });
  
  var rect1 = new Zdog.Rect({
    addTo: illo,
    width: 180,
    height: 180,
    translate: {z: 0},
    stroke: 36,
    color: '#E62',
    color: '#00FFF66',
    color: 'rgba(255, 0, 255, 0.6)',
    fill: true,
  });
  
  // square
  var rect2= new Zdog.Rect({
    addTo: illo,
    width: 150,
    height: 150,
    translate: {z: -60, x: -30},
    stroke: 6,
    color: '#E62',
    color: '#999',
    fill: false,
  });
  
  var rect3 = new Zdog.Rect({
    addTo: illo,
    width: 120,
    height: 120,
    translate: {z: -120, x: -60},
    stroke: 12,
    color: '#E62',
    color: '#3d6',
    fill: false,
  });
  
  var rect4 = new Zdog.Rect({
    addTo: illo,
    width: 90,
    height: 90,
    translate: {z: -180, x: -90},
    stroke: 12,
    color: '#E62',
    color: '#d80', 
  });
  
  function animate() {
    illo.rotate.y += isSpinning ? 0.02 : 0;
    illo.rotate.z += isSpinning ? 0.02 : 0;
    illo.updateRenderGraph();
    setTimeout(requestAnimationFrame(animatefast), 9000);
  }
  
  function animatefast() {
    illo.rotate.x += isSpinning ? 0.04 : 0;
    illo.rotate.z += isSpinning ? 0.04 : 0;
    illo.rotate.y += isSpinning ? 0.04 : 0;
    illo.updateRenderGraph();
    setTimeout(requestAnimationFrame(animate), 9000);
  }
  
  animatefast();
  
  function changeStyle() {
    
    function changeColor() {
      let color = ['silver', 'purple', 'yellow', 'gold', 'black', 'lime', 'blue', 'red', 'purple'];
      let index = Math.floor(Math.random() * 9);
      return color[index];
    }
    
    ellipse1.diameter = 240;
   // ellipse1.stroke = 10;
    ellipse1.color = changeColor();
    ellipse2.color = changeColor();
    ellipse3.color = changeColor();
    ellipse1.fill = true;
    ellipse2.fill = true;
    ellipse3.fill = true;
    // rect1.color = 'gold';
    rect1.color = 'rgba(255, 0, 0, 0.6)';
    // rect1.color = changeColor();
    rect2.color = changeColor();
    rect3.color = changeColor();
    rect4.color = changeColor();
    rect2.fill = true;
    rect3.fill = true;
    rect4.fill = true;
    setTimeout(changeStyle2, 9000);
  }
  
  function changeStyle2() {
    
    function changeColor() {
      let color = ['silver', 'purple', 'yellow', 'gold', 'black', 'lime', 'blue', 'red', 'purple'];
      let index = Math.floor(Math.random() * 9);
      return color[index];
    }
    
    ellipse1.stroke = 10;
    ellipse1.color = 'gold';
    // ellipse1.color = 'linear-gradient(to bottom, #0575E6, #00F260);';
    ellipse1.color = changeColor();
    ellipse2.color = changeColor();
    ellipse3.color = changeColor();
    ellipse1.fill = false;
    ellipse2.fill = false;
    ellipse3.fill = false;
    rect1.color = 'rgba(255, 0, 255, 0.6)';
    rect2.color = changeColor();
    rect3.color = changeColor();
    rect4.color = changeColor();
    rect2.fill = false;
    rect3.fill = false;
    rect4.fill = false;
    setTimeout(changeStyle, 9000);
  }
  
  setTimeout(changeStyle, 9000);
  
  let cx = document.getElementById("theCanvas").getContext("2d");
  // cx.stroke = 10;
  // cx.color = 'lime';
  cx.strokeStyle = "#0000ff";
  cx.lineWidth = 10;
  cx.beginPath();
  cx.moveTo(0, 0);
  cx.lineTo(0, 90);
  cx.lineTo(90, 70);
  cx.stroke();
  cx.closePath();
  // cx.fill();
  
  const canvas = document.getElementById('theCanvas');
  const ctx = canvas.getContext('2d');
  ctx.rect(10, 10, 150, 100);
  ctx.stroke();