import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faSearch, faMapMarkerAlt, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)