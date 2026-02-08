import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'
import { pushToDataLayer } from '../../utils/analytics'

const sendToGTM = ({ name, delta, value, id, rating }) => {
  pushToDataLayer({
    event: 'web_vitals',
    event_category: 'Web Vitals',
    event_action: name,
    event_value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    event_label: id,
    metric_name: name,
    metric_value: value,
    metric_delta: delta,
    metric_id: id,
    metric_rating: rating,
  })
}

export const reportWebVitals = () => {
  onCLS(sendToGTM)
  onINP(sendToGTM)
  onFCP(sendToGTM)
  onLCP(sendToGTM)
  onTTFB(sendToGTM)
}
