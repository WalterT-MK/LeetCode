
var Logger = function() {
    this.log = new Map();
    
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.log.has(message)) {
        let lastStamp = this.log.get(message);
        if (lastStamp + 10 <= timestamp) {
            this.log.set(message, timestamp);
            return true;
        } else {
            return false;
        }
    } else {
        this.log.set(message, timestamp);
        return true;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */