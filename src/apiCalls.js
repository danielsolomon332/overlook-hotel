const fetchData = api =>
  fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())

const getBookingsData = () = fetchData('bookings')

const getCustomersData = () = fetchData('customers')

const getRoomsData = () = fetchData('rooms')



export {getBookingsData, getCustomersData, getRoomsData}
