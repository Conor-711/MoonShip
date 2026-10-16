import {tr} from './language.js';
import {useLanguage} from './LanguageControl.js';
export function UiIcon({name}:{name:'network'|'tokens'|'feed'|'home'|'rank'|'swap'|'message'|'rights'|'income'|'wallet'|'settings'|'close'|'edit'|'back'|'check'|'refresh'|'arrow'|'send'|'receive'|'more'|'search'|'bell'|'plus'}){
  useLanguage();
  const paths={
    network:<><circle cx="12" cy="12" r="3"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="18" cy="20" r="2"/><path d="m6 6 4 4m4-1 4-3m-4 8 3 4"/></>,
    tokens:<><circle cx="10" cy="10" r="6"/><path d="M16 9a6 6 0 1 1-7 7"/></>,
    feed:<><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
    rights:<><path d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4Z"/><path d="M15 7v12m-7-6h3"/></>,
    income:<><circle cx="12" cy="12" r="9"/><path d="M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9m3-10v12"/></>,
    rank:<><path d="M8 3h8v6a4 4 0 0 1-8 0Z"/><path d="M8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v5m-4 3h8m-6-3h4v3"/></>,
    home:<><path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/></>,
    swap:<><path d="M4 7h15m-4-4 4 4-4 4M20 17H5m4-4-4 4 4 4"/></>,
    message:<path d="M21 11a9 9 0 0 1-9 9H4l-2 2v-11a9 9 0 0 1 19 0Z"/>,
    wallet:<><path d="M20 8V5H5a3 3 0 0 0 0 6h16v10H5a3 3 0 0 1-3-3V8"/><path d="M21 14h-5v4h5"/></>,
    settings:<><path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 3v6m8 0v6m-6 0v6"/></>,
    close:<path d="m6 6 12 12M18 6 6 18"/>,
    edit:<><path d="m15 4 5 5-11 11H4v-5Z"/><path d="m12 7 5 5"/></>,
    back:<path d="m10 5-7 7 7 7M3 12h18"/>,
    check:<><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/></>,
    refresh:<><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6 6a8 8 0 0 1 14 6M18 18A8 8 0 0 1 4 12"/></>,
    send:<path d="M5 19 19 5M6 5h13v13"/>,
    receive:<path d="M19 5 5 19M18 19H5V6"/>,
    more:<><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
    search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    bell:<><path d="M6 9a6 6 0 0 1 12 0v6l2 3H4l2-3Z"/><path d="M10 21h4"/></>,
    plus:<path d="M12 5v14M5 12h14"/>,
    arrow:<path d="M5 19 19 5M6 5h13v13"/>,
  };
  return <svg className="ui-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
