import * as SimpleNodeLogger from 'simple-node-logger';

// create a custom timestamp format for log statements
const opts = {
    logFilePath:'./src/lib/log/changefrom.log',
    timestampFormat:'YYYY-MM-DD HH:mm:ss'
}
export const log = SimpleNodeLogger.createSimpleLogger( opts );