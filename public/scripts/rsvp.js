mdc.textField.MDCTextField.attachTo(document.querySelector('.name'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.party-num'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.date-night'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.diet-restriction'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.food-1'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.food-2'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.food-3'))
mdc.textField.MDCTextField.attachTo(document.querySelector('.food-4'))

mdc.ripple.MDCRipple.attachTo(document.querySelector('.submit'))

mdc.formField.MDCFormField.attachTo(document.querySelector('.mdc-form-field'))
mdc.checkbox.MDCCheckbox.attachTo(document.querySelector('.mdc-checkbox'))
mdc.radio.MDCRadio.attachTo(document.querySelector('.mdc-radio'))

// formField.input = radio
// formField.input = checkbox

document.getElementById('attending-checkbox').addEventListener('click', function(){
    var form = document.querySelector('.full-rsvp-form')

    if (form.style.display == 'block') {
      form.style.display = 'none'
    } else {
      form.style.display = 'block'
    }
})

document.getElementById('dietary-choice-1').addEventListener('click', function(){
    document.querySelector('.diet-restriction').style.display = 'block';
})

document.getElementById('dietary-choice-2').addEventListener('click', function(){
    document.querySelector('.diet-restriction').style.display = 'none';
})
