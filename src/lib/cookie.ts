// cookie managment

import { browser } from "$app/env";

export const translatorUser = 'Translatoruser';

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

export function readCookie(request) {
    const cookies = {};
    request.headers.cookie.split(';').forEach(function(cookie) {
    const parts = cookie.match(/(.*?)=(.*)$/)
    cookies[ parts[1].trim() ] = (parts[2] || '').trim();
    });
    return cookies;
}
