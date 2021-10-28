// create log function

import { log } from "$lib/logger";

export function setFileLog(openFile):void {
    
    log?.info('User ', ' öffnet folgende file', openFile);
};