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
        this.enableHeartbeat = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25uZWN0aW9uLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdGIvYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYXV0aC1jb25uZWN0aW9uLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7O0lBdUJJLCtCQUFZLFlBQW9COzs7O1FBbkJoQyxvQkFBZSxHQUFHLElBQUksQ0FBQzs7Ozs7UUFLdkIsaUJBQVksR0FBRywwQkFBMEIsQ0FBQzs7OztRQUkxQyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQyx1QkFBdUI7Ozs7O1FBSWpELDJCQUFzQixHQUFHLElBQUksQ0FBQzs7OztRQUk5QixrQkFBYSxHQUF3QyxNQUFNLENBQUM7UUFHeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQzs7Ozs7Ozs7OztJQXRCRyxnREFBdUI7Ozs7OztJQUt2Qiw2Q0FBMEM7Ozs7O0lBSTFDLGtEQUF5Qjs7Ozs7SUFJekIsdURBQThCOzs7OztJQUk5Qiw4Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW5zdGFuY2Ugb2YgdGhpcyBpbnRlcmZhY2UgY291bGQgYmUgdXNlZCB0byBjb25maWd1cmUgXCJDb25uZWN0aW9uU2VydmljZVwiLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEF1dGhDb25uZWN0aW9uT3B0aW9ucyB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRyb2xzIHRoZSBJbnRlcm5ldCBjb25uZWN0aXZpdHkgaGVhcnRiZWF0IHN5c3RlbS4gRGVmYXVsdCB2YWx1ZSBpcyAndHJ1ZScuXHJcbiAgICAgKi9cclxuICAgIGVuYWJsZUhlYXJ0YmVhdCA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIFVybCB1c2VkIGZvciBjaGVja2luZyBJbnRlcm5ldCBjb25uZWN0aXZpdHksIGhlYXJ0YmVhdCBzeXN0ZW0gcGVyaW9kaWNhbGx5IG1ha2VzIFwiSEVBRFwiIHJlcXVlc3RzIHRvIHRoaXMgVVJMIHRvIGRldGVybWluZSBJbnRlcm5ldFxyXG4gICAgICogY29ubmVjdGlvbiBzdGF0dXMuIERlZmF1bHQgdmFsdWUgaXMgXCIvL2ludGVybmV0aGVhbHRodGVzdC5vcmdcIi5cclxuICAgICAqL1xyXG4gICAgaGVhcnRiZWF0VXJsID0gJy8vaW50ZXJuZXRoZWFsdGh0ZXN0Lm9yZyc7XHJcbiAgICAvKipcclxuICAgICAqIEludGVydmFsIHVzZWQgdG8gY2hlY2sgSW50ZXJuZXQgY29ubmVjdGl2aXR5IHNwZWNpZmllZCBpbiBtaWxsaXNlY29uZHMuIERlZmF1bHQgdmFsdWUgaXMgXCIzMDAwMFwiLlxyXG4gICAgICovXHJcbiAgICBoZWFydGJlYXRJbnRlcnZhbCA9IDUwMDA7IC8vIFRPRE8gYWJiYXNzYXJlIGEgMzBzXHJcbiAgICAvKipcclxuICAgICAqIEludGVydmFsIHVzZWQgdG8gcmV0cnkgSW50ZXJuZXQgY29ubmVjdGl2aXR5IGNoZWNrcyB3aGVuIGFuIGVycm9yIGlzIGRldGVjdGVkICh3aGVuIG5vIEludGVybmV0IGNvbm5lY3Rpb24pLiBEZWZhdWx0IHZhbHVlIGlzIFwiMTAwMFwiLlxyXG4gICAgICovXHJcbiAgICBoZWFydGJlYXRSZXRyeUludGVydmFsID0gMTAwMDtcclxuICAgIC8qKlxyXG4gICAgICogSFRUUCBtZXRob2QgdXNlZCBmb3IgcmVxdWVzdGluZyBoZWFydGJlYXQgVXJsLiBEZWZhdWx0IGlzICdoZWFkJy5cclxuICAgICAqL1xyXG4gICAgcmVxdWVzdE1ldGhvZDogJ2dldCcgfCAncG9zdCcgfCAnaGVhZCcgfCAnb3B0aW9ucycgPSAnaGVhZCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaGVhcnRiZWF0VXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmhlYXJ0YmVhdFVybCA9IGhlYXJ0YmVhdFVybDtcclxuICAgIH1cclxufVxyXG4iXX0=