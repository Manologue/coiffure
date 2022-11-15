let calendar = flatpickr('#search-day', {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
  minDate: 'today',
  locale: 'de', // locale for this instance only
})

const inputLocation = document.querySelector('#location-input'),
  inputServices = document.querySelector('#services-input'),
  inputDate = document.querySelector('#search-day'),
  modalServices = document.querySelector('#modal-services'),
  modalLocation = document.querySelector('#modal-location'),
  modalAlert = document.querySelector('#modal-danger')
const modalOverlay = document.querySelector('.modal-overlay')

// console.log(serviceList, locationList)

function limit(string = '', limit = 0) {
  return string.substring(0, limit)
}

if (modalOverlay) {
  const locationList = modalLocation.querySelector('.list')
  const serviceList = modalServices.querySelector('.list')
  /*** on click */
  inputServices.addEventListener('click', () => {
    modalServices.classList.add('show')
  })
  modalServices.querySelector('.close').addEventListener('click', () => {
    modalServices.classList.remove('show')
  })

  inputLocation.addEventListener('click', () => {
    modalLocation.classList.add('show')
  })

  modalLocation.querySelector('.close').addEventListener('click', () => {
    modalLocation.classList.remove('show')
  })
  modalAlert.querySelector('.close').addEventListener('click', () => {
    modalAlert.classList.remove('show')
  })

  /* getting values to add it on search form */
  locationList.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target.hasAttribute('data-location')) {
      let location = e.target.dataset.location
      console.log(location)
      if (location.length > 25) {
        location = limit(location, 25).concat('...')
      }
      inputLocation.value = location
      if (inputLocation.value != '') {
        modalLocation.classList.remove('show')
        const closeBtn = inputLocation.parentElement.querySelector('i:nth-child(2)')
        closeBtn.style.display = 'block'
        closeBtn.addEventListener('click', () => {
          inputLocation.value = ''
          closeBtn.style.display = 'none'
        })
      }
    }
  })
  const services = serviceList.querySelectorAll('input')
  const btn = serviceList.parentElement.querySelector('.btn')
  btn.addEventListener('click', () => {
    let checkedList = [...new Set()]
    let values = []

    services.forEach((service) => {
      if (service.checked) {
        checkedList.push(service.value)
        values = checkedList.join(', ')
        console.log(values)
      }
    })
    modalServices.classList.remove('show')
    if (values != '') {
      if (values.length > 25) {
        values = limit(values, 25).concat('...')
        console.log(values)
      }
      inputServices.value = values
      const closeBtn = inputServices.parentElement.querySelector('i:nth-child(2)')
      closeBtn.style.display = 'block'
      closeBtn.addEventListener('click', () => {
        inputServices.value = ''
        closeBtn.style.display = 'none'
      })
    } else {
      inputServices.value = ''
    }
  })

  /*** for input date */
  inputDate.addEventListener('input', () => {
    if (inputDate.value) {
      const closeBtn = inputDate.parentElement.querySelector('i:nth-child(2)')
      console.log(closeBtn)
      closeBtn.style.display = 'block'
      closeBtn.addEventListener('click', () => {
        // inputDate.value = ''
        calendar.clear()
        closeBtn.style.display = 'none'
      })
    }
  })
}
