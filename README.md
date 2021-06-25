# FORM CUSTOM
Customize element form - frond end

## Input number Horizontal style
Preview
[here.](https://codepen.io/hillzacky/pen/vYxMgwL)

Via CDN
```
<!--css-->
<style rel="stylesheet" src="https://cdn.jsdelivr.net/gh/Hillzacky/form-custom@1.0.0/input-number/dist/css/input-number.css"></style>
<!--js-->
<script src="https://cdn.jsdelivr.net/gh/Hillzacky/form-custom@1.0.0/input-number/dist/js/input-number.min.js"></script>
```
Add Element
```
<div id="input-qty"></div>
```
Init input number on script
```
inputNumber({
    element: 'input-qty',
    inputNumber: {
      name:'quantity'
    }
   });
```
Default Options
```
inputNumber({
    element: 'input-qty', /* Target element ID */
    inputNumber: {
      name: false,
      min: 1,
      max: false,
      step: 1,
      value: 1
    },
    class: {
        textNumber: 'number-qty',
        btnDown: 'adjust-qty',
        btnUp: 'adjust-qty'
    }
  });
```
