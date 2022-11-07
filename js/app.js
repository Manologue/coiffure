// components
import './components/header.js'
// import './components/filterIsotope.js'

// pages
import './pages/home.js'
import './pages/commande.js'

const options = {
  method: 'GET',
}

fetch(
  'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
