import { common as tCommon } from "locales";

const generateNavigationData = (translate) => {
  return [
    {
      name: translate(tCommon.commands),
      route: '/'
    },
    {
      name: translate(tCommon.chat),
      route: '/chat'
    },
    {
      name: translate(tCommon.dashboard),
      route: '/dashboard'
    }
  ]
}

export default generateNavigationData;