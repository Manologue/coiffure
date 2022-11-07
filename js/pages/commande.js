flatpickr('input[type=datetime-local]', {
  minDate: 'today',
  dateFormat: 'd.m.Y',
  disable: [
    function (date) {
      // return true to disable
      return date.getDay() === 0
    },
  ],
  locale: {
    firstDayOfWeek: 1, // start week on Monday
  },
  // wrap: true,
})
