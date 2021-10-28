import * as SimpleNodeLogger from 'simple-node-logger';
const create = SimpleNodeLogger?.createSimpleLogger;

// create a custom timestamp format for log statements
const opts = {
    logFilePath:'./src/lib/log/changefrom.log',
    timestampFormat:'YYYY-MM-DD HH:mm:ss'
}
export const log = typeof create === 'function' ? create( opts ): null;