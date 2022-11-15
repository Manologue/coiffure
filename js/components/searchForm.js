const homeForm = document.querySelector('.home-form')

if (homeForm) {
  const inputsField = homeForm.querySelectorAll('input')
  // console.log(inputsField)

  inputsField.forEach((input) => {
    input.addEventListener('input', () => {
      // console.log(input.parentElement)

      // const closeIcon = input.parentElement.querySelector('i:nth-child(2)')
      // console.log(closeIcon)
      if (!input.value == '') {
        console.log('get the close element out')
        // closeIcon.style.display = 'block'
      } else {
        console.log('close element')
        // closeIcon.style.display = 'none'
      }
      // closeIcon.addEventListener('click', () => {
      //   input.value = ''
      //   // closeIcon.style.display = 'none'
      // })
    })
  })
}
