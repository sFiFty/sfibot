import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faComments } from '@fortawesome/free-solid-svg-icons'
import { common as tCommon } from "locales";

const generateNavigationData = (translate) => {
  return [
    {
      name: translate(tCommon.commands),
      route: '/',
      icon: <FontAwesomeIcon icon={faExclamationCircle} />
    },
    {
      name: translate(tCommon.chat),
      route: '/chat',
      icon: <FontAwesomeIcon icon={faComments} />
    }
  ]
}

export default generateNavigationData;