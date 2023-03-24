import { CacheFirst } from 'workbox-strategies'
import { warmStrategyCache } from 'workbox-recipes'

const strategy = new CacheFirst()
const urls = [
  '/best-sellers.html'
]

warmStrategyCache({ urls, strategy })