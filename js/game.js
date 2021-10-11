
  var score = 0;
  var type = "default";
  var multiplier_cost = 10;
  var bonus_cost = 20;
  var autoclicker_cost = 30;


  const clicker = document.getElementById('clicker');
  const target = document.getElementById('score_count');
  const setdefault = document.getElementById('default');
  const multiplier = document.getElementById('multiplier');
  const reset = document.getElementById('reset');
  const autoclicker = document.getElementById('autoclicker');
  const bonus = document.getElementById('bonus');


  function main() {
    if(type == 'default') {
      score ++;
    }
    if(type == 'multiplier') {
      score = score + 2;
    }
    if(type == 'bonus') {
      score = score + 5;
    }

    loadscore();

  }

  function loadscore()  {
    target.innerHTML = score;
  }

  clicker.addEventListener('click', main);
  setdefault.addEventListener('click', function() {
    type = "default";
  });
  multiplier.addEventListener('click', function() {
    if(score >= multiplier_cost) {
      score = score - multiplier_cost;
      loadscore();
      type = "multiplier";
      multiplier_cost = multiplier_cost + 10;
      document.getElementById('multiplier_cost').innerHTML = multiplier_cost;
    }
    else {
      alert(`you can't buy this option`);
    }
  });

  autoclicker.addEventListener('click', function() {
    if(score >= autoclicker_cost) {
      score = score - autoclicker_cost;
      loadscore();
      setInterval(function() {
      score ++;
      loadscore();
      }, 1000)
    }
    else {
      alert(`you can't buy this option`);
    }
    });

  bonus.addEventListener('click', function() {
    if(score >= bonus_cost) {
        score = score - bonus_cost;
        loadscore();
        type = "bonus";
        setTimeout(function() {
          type =  "default"
        },3000)
      }
      else {
        alert(`you can't buy this option`);
      }
    });

  reset.addEventListener('click', function() {
    score = 0;
    type = "default";
    multiplier_cost = 10;
    loadscore();
  });
