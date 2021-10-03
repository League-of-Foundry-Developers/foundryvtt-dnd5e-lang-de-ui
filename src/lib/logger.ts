// create a custom timestamp format for log statements
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const SimpleNodeLogger = require('simple-node-logger'),
	opts = {
		logFilePath:'$lib/log/changefrom.log',
		timestampFormat:'YYYY-MM-DD HH:mm:ss'
	},
log = SimpleNodeLogger.createSimpleLogger( opts );