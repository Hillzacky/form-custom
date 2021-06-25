'use strict';
function inputNumber(opts){
  let o, initQty, iN, m, p, nQ, step, min;
  function un(a) { return typeof a === 'undefined' || a === null; }
  o = {
    element: un(opts.element)?'input-qty':opts.element,
    inputNumber: {
      name: un(opts.inputNumber)||un(opts.inputNumber.name)?false:opts.inputNumber.name,
      min: un(opts.inputNumber)||un(opts.inputNumber.min)?1:opts.inputNumber.min,
      max: un(opts.inputNumber)||un(opts.inputNumber.max)?false:opts.inputNumber.max,
      step: un(opts.inputNumber)||un(opts.inputNumber.step)?1:opts.inputNumber.step,
      value: un(opts.inputNumber)||un(opts.inputNumber.value)?1:opts.inputNumber.value
    },
    class: {
        textNumber: un(opts.class)||un(opts.class.textNumber)?'number-qty':opts.class.textNumber,
        btnDown: un(opts.class)||un(opts.class.btnDown)?'adjust-qty':opts.class.btnDown,
        btnUp: un(opts.class)||un(opts.class.btnUp)?'adjust-qty':opts.class.btnUp
    }
  }
  initQty = document.getElementById(o.element);
  if(initQty){
    iN = document.createElement("input");
    iN.setAttribute("id", "tn"+o.element);
    iN.setAttribute("type", "number");
    iN.setAttribute("class", o.class.textNumber);
    iN.setAttribute("min", o.inputNumber.min);
    iN.setAttribute("step", o.inputNumber.step);
    iN.setAttribute("name", o.inputNumber.name);
    iN.setAttribute("value", o.inputNumber.value);
    m = document.createElement("button");
    m.setAttribute("id", "bd"+o.element);
    m.setAttribute("class", o.class.btnDown);
    m.textContent = "-";
    p = document.createElement("button");
    p.setAttribute("id", "bu"+o.element);
    p.setAttribute("class", o.class.btnUp);
    p.textContent = "+";

    initQty.appendChild(m);
    initQty.appendChild(iN);
    initQty.appendChild(p);

    nQ = document.getElementById("tn"+o.element);
    step = parseInt(o.inputNumber.step);
    min = parseInt(o.inputNumber.min);

    document.getElementById("bu"+o.element).addEventListener("click", function() {
      let qC = parseFloat(nQ.value);
      if(qC >= min){
        nQ.value = qC + step;
      }
      nQ.dispatchEvent(new Event("change"))
    });

    document.getElementById("bd"+o.element).addEventListener("click", function() {
      let qC = parseFloat(nQ.value);
      if(qC > min){
        nQ.value = qC - step;
      }
      nQ.dispatchEvent(new Event("change"))
    })
  }
}