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
const infoLocationCart = document.querySelector('.info')
// console.log(infoLocationCart)

// console.log(serviceList, locationList)

function limit(string = '', limit = 0) {
  return string.substring(0, limit)
}

if (modalOverlay) {
  const locationList = modalLocation.querySelector('.list')
  const serviceList = modalServices.querySelector('.list')
  const services = serviceList.querySelectorAll('input')
  const btn = serviceList.parentElement.querySelector('.btn')
  /******************** for search form ***********************/
  if (inputLocation) {
    inputServices.addEventListener('click', () => {
      modalServices.classList.add('show')
    })
    inputLocation.addEventListener('click', () => {
      modalLocation.classList.add('show')
    })

    /*** for input date */
    inputDate.addEventListener('input', () => {
      if (inputDate.value) {
        const clearBtn = inputDate.parentElement.querySelector('i:nth-child(2)')
        console.log(closeBtn)
        clearBtn.style.display = 'block'
        clearBtn.addEventListener('click', () => {
          // inputDate.value = ''
          calendar.clear()
          clearBtn.style.display = 'none'
        })
      }
    })

    /* getting values to add it on search form */
    // for location
    locationList.addEventListener('click', (e) => {
      // console.log(e.target)
      if (e.target.hasAttribute('data-location')) {
        let location = e.target.dataset.location
        // console.log(location)

        if (location.length > 25) {
          location = limit(location, 25).concat('...')
        }
        inputLocation.value = location
        if (inputLocation.value != '') {
          modalLocation.classList.remove('show')
          const clearBtn = inputLocation.parentElement.querySelector('i:nth-child(2)')
          clearBtn.style.display = 'block'
          clearBtn.addEventListener('click', () => {
            inputLocation.value = ''
            clearBtn.style.display = 'none'
          })
        }
      }
    })
    // for services
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
        const clearBtn = inputServices.parentElement.querySelector('i:nth-child(2)')
        clearBtn.style.display = 'block'
        clearBtn.addEventListener('click', () => {
          inputServices.value = ''
          clearBtn.style.display = 'none'
          services.forEach((service) => {
            if (service.checked) {
              service.checked = false
            }
          })
        })
      } else {
        inputServices.value = ''
      }
    })
  }
  modalServices.querySelector('.close').addEventListener('click', () => {
    modalServices.classList.remove('show')
  })

  modalLocation.querySelector('.close').addEventListener('click', () => {
    modalLocation.classList.remove('show')
  })
  modalAlert.querySelector('.close').addEventListener('click', () => {
    modalAlert.classList.remove('show')
  })

  /*********** for card form ********/

  const destinationBtn = document.querySelector('#destination-btn')
  destinationBtn.addEventListener('click', (e) => {
    e.preventDefault()
    modalLocation.classList.add('show')
  })
  locationList.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-location')) {
      let location = e.target.dataset.location
      if (infoLocationCart) {
        infoLocationCart.innerHTML = `<p>${location}</p>`
        // console.log(infoLocationCart)
        modalLocation.classList.remove('show')
      }
    }
  })
}
