/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Instance of this interface could be used to configure "ConnectionService".
 */
var /**
 * Instance of this interface could be used to configure "ConnectionService".
 */
AuthConnectionOptions = /** @class */ (function () {
    function AuthConnectionOptions(heartbeatUrl) {
        /**
         * Controls the Internet connectivity heartbeat system. Default value is 'true'.
         */
        this.enableHeartbeat = false;
        /**
         * Url used for checking Internet connectivity, heartbeat system periodically makes "HEAD" requests to this URL to determine Internet
         * connection status. Default value is "//internethealthtest.org".
         */
        this.heartbeatUrl = '//internethealthtest.org';
        /**
         * Interval used to check Internet connectivity specified in milliseconds. Default value is "30000".
         */
        this.heartbeatInterval = 5000; // TODO abbassare a 30s
        // TODO abbassare a 30s
        /**
         * Interval used to retry Internet connectivity checks when an error is detected (when no Internet connection). Default value is "1000".
         */
        this.heartbeatRetryInterval = 1000;
        /**
         * HTTP method used for requesting heartbeat Url. Default is 'head'.
         */
        this.requestMethod = 'head';
        this.heartbeatUrl = heartbeatUrl;
    }
    return AuthConnectionOptions;
}());
/**
 * Instance of this interface could be used to configure "ConnectionService".
 */
export { AuthConnectionOptions };
if (false) {
    /**
     * Controls the Internet connectivity heartbeat system. Default value is 'true'.
     * @type {?}
     */
    AuthConnectionOptions.prototype.enableHeartbeat;
    /**
     * Url used for checking Internet connectivity, heartbeat system periodically makes "HEAD" requests to this URL to determine Internet
     * connection status. Default value is "//internethealthtest.org".
     * @type {?}
     */
    AuthConnectionOptions.prototype.heartbeatUrl;
    /**
     * Interval used to check Internet connectivity specified in milliseconds. Default value is "30000".
     * @type {?}
     */
    AuthConnectionOptions.prototype.heartbeatInterval;
    /**
     * Interval used to retry Internet connectivity checks when an error is detected (when no Internet connection). Default value is "1000".
     * @type {?}
     */
    AuthConnectionOptions.prototype.heartbeatRetryInterval;
    /**
     * HTTP method used for requesting heartbeat Url. Default is 'head'.
     * @type {?}
     */
    AuthConnectionOptions.prototype.requestMethod;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25uZWN0aW9uLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYXV0aC1jb25uZWN0aW9uLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBdUJJLCtCQUFZLFlBQW9COzs7O1FBbkJoQyxvQkFBZSxHQUFHLEtBQUssQ0FBQzs7Ozs7UUFLeEIsaUJBQVksR0FBRywwQkFBMEIsQ0FBQzs7OztRQUkxQyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQyx1QkFBdUI7Ozs7O1FBSWpELDJCQUFzQixHQUFHLElBQUksQ0FBQzs7OztRQUk5QixrQkFBYSxHQUF3QyxNQUFNLENBQUM7UUFHeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7Ozs7OztJQXRCRyxnREFBd0I7Ozs7OztJQUt4Qiw2Q0FBMEM7Ozs7O0lBSTFDLGtEQUF5Qjs7Ozs7SUFJekIsdURBQThCOzs7OztJQUk5Qiw4Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW5zdGFuY2Ugb2YgdGhpcyBpbnRlcmZhY2UgY291bGQgYmUgdXNlZCB0byBjb25maWd1cmUgXCJDb25uZWN0aW9uU2VydmljZVwiLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhDb25uZWN0aW9uT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHRoZSBJbnRlcm5ldCBjb25uZWN0aXZpdHkgaGVhcnRiZWF0IHN5c3RlbS4gRGVmYXVsdCB2YWx1ZSBpcyAndHJ1ZScuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUhlYXJ0YmVhdCA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcmwgdXNlZCBmb3IgY2hlY2tpbmcgSW50ZXJuZXQgY29ubmVjdGl2aXR5LCBoZWFydGJlYXQgc3lzdGVtIHBlcmlvZGljYWxseSBtYWtlcyBcIkhFQURcIiByZXF1ZXN0cyB0byB0aGlzIFVSTCB0byBkZXRlcm1pbmUgSW50ZXJuZXRcclxuICAgICAqIGNvbm5lY3Rpb24gc3RhdHVzLiBEZWZhdWx0IHZhbHVlIGlzIFwiLy9pbnRlcm5ldGhlYWx0aHRlc3Qub3JnXCIuXHJcbiAgICAgKi9cclxuICAgIGhlYXJ0YmVhdFVybCA9ICcvL2ludGVybmV0aGVhbHRodGVzdC5vcmcnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcnZhbCB1c2VkIHRvIGNoZWNrIEludGVybmV0IGNvbm5lY3Rpdml0eSBzcGVjaWZpZWQgaW4gbWlsbGlzZWNvbmRzLiBEZWZhdWx0IHZhbHVlIGlzIFwiMzAwMDBcIi5cclxuICAgICAqL1xyXG4gICAgaGVhcnRiZWF0SW50ZXJ2YWwgPSA1MDAwOyAvLyBUT0RPIGFiYmFzc2FyZSBhIDMwc1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcnZhbCB1c2VkIHRvIHJldHJ5IEludGVybmV0IGNvbm5lY3Rpdml0eSBjaGVja3Mgd2hlbiBhbiBlcnJvciBpcyBkZXRlY3RlZCAod2hlbiBubyBJbnRlcm5ldCBjb25uZWN0aW9uKS4gRGVmYXVsdCB2YWx1ZSBpcyBcIjEwMDBcIi5cclxuICAgICAqL1xyXG4gICAgaGVhcnRiZWF0UmV0cnlJbnRlcnZhbCA9IDEwMDA7XHJcbiAgICAvKipcclxuICAgICAqIEhUVFAgbWV0aG9kIHVzZWQgZm9yIHJlcXVlc3RpbmcgaGVhcnRiZWF0IFVybC4gRGVmYXVsdCBpcyAnaGVhZCcuXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RNZXRob2Q6ICdnZXQnIHwgJ3Bvc3QnIHwgJ2hlYWQnIHwgJ29wdGlvbnMnID0gJ2hlYWQnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhlYXJ0YmVhdFVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5oZWFydGJlYXRVcmwgPSBoZWFydGJlYXRVcmw7XHJcbiAgICB9XHJcbn1cclxuIl19