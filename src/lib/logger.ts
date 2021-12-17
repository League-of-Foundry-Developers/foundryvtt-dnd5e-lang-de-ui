import { ILogObject, Logger } from "tslog";
import { appendFileSync } from "fs";

function logToTransport(logObject: ILogObject) {
    appendFileSync("./src/lib/log/loadfile.txt", JSON.stringify(logObject) + "\n");
}

function logToError(logObject: ILogObject) {
    appendFileSync("./src/lib/log/loadingFile.txt", JSON.stringify(logObject) + "\n");
}

function safeToFile(logObject: ILogObject) {
    appendFileSync("./src/lib/log/safeToFile.txt", JSON.stringify(logObject) + "\n");
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