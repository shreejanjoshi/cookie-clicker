(function() {

  var score = 0;
  var type = "default";
  var multiplier_cost = 10;
  var multiplier_purchase = 0;
  var bonus_cost = 30;
  var bonus_purchase = 0;
  var autoclicker_cost = 20;
  var autoclicker_purchase = 0;


  const clicker = document.getElementById('clicker');
  const target = document.getElementById('score_count');
  const multiplier = document.getElementById('multiplier');
  const autoclicker = document.getElementById('autoclicker');
  const bonus = document.getElementById('bonus');


  function main() {
    if(type == 'default') {
      score ++;
    }
    if(type == 'multiplier') {
      score = score + (multiplier_purchase*2);
    }
    if(type == 'bonus') {
      score = score + (bonus_purchase*3);
    }

    loadscore();

  }

  function loadscore()  {
    target.innerHTML = score;
  }

  clicker.addEventListener('click', main);
  // setdefault.addEventListener('click', function() {
  //   type = "default";
  // });
  multiplier.addEventListener('click', function() {
    if(score >= multiplier_cost) {
      score = score - multiplier_cost;
      loadscore();
      type = "multiplier";
      multiplier_purchase ++;
      multiplier_cost = multiplier_cost + 10;
      document.getElementById('multiplier_cost').innerHTML = multiplier_cost;
      multiplier_purchase_count = "";
      for(i=0;i<multiplier_purchase; i++) {
        multiplier_purchase_count = multiplier_purchase_count + `| `;
      }
      document.getElementById('multiplier_purchase_count').innerHTML = multiplier_purchase_count;
    }
    else {
      alert(`you can't buy this option`);
    }
  });

  autoclicker.addEventListener('click', function() {
    if(score >= autoclicker_cost) {
      score = score - autoclicker_cost;
      autoclicker_cost = autoclicker_cost + 20;
      autoclicker_purchase ++;
      document.getElementById('autoclicker_cost').innerHTML = autoclicker_cost;
      multiplier_cost = multiplier_cost + 20;
      setInterval(function() {
      score = score + autoclicker_purchase;
      loadscore();
      autoclicker_purchase_count = "";
      for(i=0;i<autoclicker_purchase; i++) {
        autoclicker_purchase_count = autoclicker_purchase_count + `| `;
      }
      document.getElementById('autoclicker_purchase_count').innerHTML = autoclicker_purchase_count;
    }, 1000);
    }
    else {
      alert(`you can't buy this option`);
    }
    });

  bonus.addEventListener('click', function() {
    if(score >= bonus_cost) {
        score = score - bonus_cost;
        bonus_cost = bonus_cost + 20;
        bonus_purchase ++;
        document.getElementById('bonus_cost').innerHTML = bonus_cost;
        loadscore();
        type = "bonus";
        setTimeout(function() {
          type =  "default"
        },3000);
        bonus_purchase_count = "";
        for(i=0;i<bonus_purchase; i++) {
          bonus_purchase_count = bonus_purchase_count + `| `;
        }
        document.getElementById('bonus_purchase_count').innerHTML = bonus_purchase_count;
      }
      else {
        alert(`you can't buy this option`);
      }
    });

    var elements = document.getElementsByClassName('btn');
    Array.from(elements).forEach(function(element) {
      element.addEventListener('mouseover', function() {
        var id = this.getAttribute('id');
         var selector = `more_info_` + id;
         document.getElementById(selector).classList.remove('hidden');
      });
    });
    Array.from(elements).forEach(function(element) {
      element.addEventListener('mouseleave', function() {
        var id = this.getAttribute('id');
         var selector = `more_info_` + id;
         document.getElementById(selector).classList.add('hidden');
      });
    });
  })();
