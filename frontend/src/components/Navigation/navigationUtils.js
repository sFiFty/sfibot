import { common as tCommon } from 'locales';

const generateNavigationData = (translate) => [
  {
    name: translate(tCommon.commands),
    route: '/',
  },
  {
    name: translate(tCommon.viewers),
    route: '/viewers',
  },
  {
    name: translate(tCommon.dashboard),
    route: '/dashboard',
  },
  {
    name: translate(tCommon.requests),
    route: '/requests',
  },
];

export default generateNavigationData;
