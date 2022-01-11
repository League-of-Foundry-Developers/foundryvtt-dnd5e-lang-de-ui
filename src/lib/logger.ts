import { ILogObject, Logger } from "tslog";
import { appendFileSync } from "fs";
import { dev } from '$app/env'
import path from 'path';

const dirname = path.resolve('./');

function logToTransport(logObject: ILogObject) {
    appendFileSync(path.join(dirname, dev ? "src/lib/log/loadfile.txt" : "srv/translator/build/assets/log/loadfile.txt"), JSON.stringify(logObject) + "\n");
}

function logToError(logObject: ILogObject) {
    appendFileSync(path.join(dirname, dev ? "src/lib/log/loadingFile.txt" : "srv/translator/build/assets/log/loadingFile.txt"), JSON.stringify(logObject) + "\n");
}

function safeToFile(logObject: ILogObject) {
    appendFileSync(path.join(dirname, dev ? "src/lib/log/safeToFile.txt": "srv/translator/build/assets/log/safeToFile.txt"), JSON.stringify(logObject) + "\n");
}
  
export const logger: Logger = new Logger();
logger.attachTransport(
{
    silly: logToTransport,
    debug: logToTransport,
    trace: logToTransport,
    info: logToTransport,
    warn: safeToFile,
    error: logToError,
    fatal: logToError,
},
"debug"
);