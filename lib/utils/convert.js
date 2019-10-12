'use strict';
/**
 * Automatically try to determine what type of time the input is and run the conversion
 * to make it the specified type.
 * 
 * This is easier to use but also reduces readability, in my opinion.
 * 
 * @param {number|string} time The time in milliseconds or a string to convert to the other type.
 * @param {boolean} ms Indicates whether the time be returned as milliseconds or as 'hh:mm:ss'.
 * 
 * @returns {number|string}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = auto;

function auto(time) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isNumeric(time)) {
    time = parseFloat(time.toString());
    if (ms) return time;else return msToTime(time);
  } else {
    if (!ms) return time;else return timeToMs(time.toString());
  }
}
/**
 * Convert a time value from milliseconds to a 'hh:mm:ss' format.
 * 
 * @since 2.0.0
 * 
 * @param {number|string} ms The time might be in milliseconds but it could still be in a string.
 * 
 * @returns {string} The time in 'hh:mm:ss' format.
 */


function msToTime(ms) {
  var hh = Math.floor(parseInt(ms.toString()) / 1000 / 3600);
  var mm = Math.floor(parseInt(ms.toString()) / 1000 / 60 % 60);
  var ss = Math.floor(parseInt(ms.toString()) / 1000 % 60);
  return "".concat(pad(hh), ":").concat(pad(mm), ":").concat(pad(ss));
}
/**
 * Convert a time value from 'hh:mm:ss' format to milliseconds.
 * 
 * @param {string} time The time might be in 'hh:mm:ss' format.
 * 
 * @returns {number} The time in milliseconds.
 */


function timeToMs(time) {
  var hhIndex = time.indexOf(':');
  var mmIndex = time.indexOf(':', hhIndex + 1);
  var ssIndex = time.indexOf(':', mmIndex);
  var hh = parseInt(time.slice(0, hhIndex));
  var mm = parseInt(time.slice(hhIndex + 1, ssIndex));
  var ss = parseInt(time.slice(ssIndex + 1));
  hh *= 3.6 * Math.pow(10, 6);
  mm *= 60000;
  ss *= 1000;
  return hh + mm + ss;
}
/**
 * Check if a provided value is a number.
 * 
 * @param {*} n The value to check.
 * 
 * @returns {boolean} True if the value is a number and false otherwise.
 */


var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
/**
 * Add a leading 0 to a number below 10.
 * 
 * @param {number} n The number to add a leading zero to.
 * 
 * @returns {string|number} The padded or original number.
 */


var pad = function pad(n) {
  if (n < 10) return "0".concat(n);
  return n;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb252ZXJ0LnRzIl0sIm5hbWVzIjpbImF1dG8iLCJ0aW1lIiwibXMiLCJpc051bWVyaWMiLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJtc1RvVGltZSIsInRpbWVUb01zIiwiaGgiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsIm1tIiwic3MiLCJwYWQiLCJoaEluZGV4IiwiaW5kZXhPZiIsIm1tSW5kZXgiLCJzc0luZGV4Iiwic2xpY2UiLCJuIiwiaXNOYU4iLCJpc0Zpbml0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXZSxTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBOEU7QUFBQSxNQUF2Q0MsRUFBdUMsdUVBQXpCLElBQXlCOztBQUUzRixNQUFJQyxTQUFTLENBQUNGLElBQUQsQ0FBYixFQUFxQjtBQUVuQkEsSUFBQUEsSUFBSSxHQUFHRyxVQUFVLENBQUNILElBQUksQ0FBQ0ksUUFBTCxFQUFELENBQWpCO0FBRUEsUUFBSUgsRUFBSixFQUFRLE9BQU9ELElBQVAsQ0FBUixLQUVLLE9BQU9LLFFBQVEsQ0FBQ0wsSUFBRCxDQUFmO0FBRU4sR0FSRCxNQVVLO0FBRUgsUUFBSSxDQUFDQyxFQUFMLEVBQVMsT0FBT0QsSUFBUCxDQUFULEtBRUssT0FBT00sUUFBUSxDQUFDTixJQUFJLENBQUNJLFFBQUwsRUFBRCxDQUFmO0FBRU47QUFFRjtBQUVEOzs7Ozs7Ozs7OztBQVNBLFNBQVNDLFFBQVQsQ0FBa0JKLEVBQWxCLEVBQWlEO0FBRS9DLE1BQU1NLEVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQWFDLFFBQVEsQ0FBQ1QsRUFBRSxDQUFDRyxRQUFILEVBQUQsQ0FBUixHQUEwQixJQUEzQixHQUFtQyxJQUEvQyxDQUFuQjtBQUNBLE1BQU1PLEVBQVUsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQWNDLFFBQVEsQ0FBQ1QsRUFBRSxDQUFDRyxRQUFILEVBQUQsQ0FBUixHQUEwQixJQUEzQixHQUFtQyxFQUFwQyxHQUEwQyxFQUF0RCxDQUFuQjtBQUNBLE1BQU1RLEVBQVUsR0FBR0osSUFBSSxDQUFDQyxLQUFMLENBQWFDLFFBQVEsQ0FBQ1QsRUFBRSxDQUFDRyxRQUFILEVBQUQsQ0FBUixHQUEwQixJQUEzQixHQUFtQyxFQUEvQyxDQUFuQjtBQUVBLG1CQUFVUyxHQUFHLENBQUNOLEVBQUQsQ0FBYixjQUFxQk0sR0FBRyxDQUFDRixFQUFELENBQXhCLGNBQWdDRSxHQUFHLENBQUNELEVBQUQsQ0FBbkM7QUFFRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTTixRQUFULENBQWtCTixJQUFsQixFQUF3QztBQUV0QyxNQUFNYyxPQUFlLEdBQUdkLElBQUksQ0FBQ2UsT0FBTCxDQUFhLEdBQWIsQ0FBeEI7QUFDQSxNQUFNQyxPQUFlLEdBQUdoQixJQUFJLENBQUNlLE9BQUwsQ0FBYSxHQUFiLEVBQWtCRCxPQUFPLEdBQUcsQ0FBNUIsQ0FBeEI7QUFDQSxNQUFNRyxPQUFlLEdBQUdqQixJQUFJLENBQUNlLE9BQUwsQ0FBYSxHQUFiLEVBQWtCQyxPQUFsQixDQUF4QjtBQUVBLE1BQUlULEVBQVUsR0FBR0csUUFBUSxDQUFDVixJQUFJLENBQUNrQixLQUFMLENBQVcsQ0FBWCxFQUFjSixPQUFkLENBQUQsQ0FBekI7QUFDQSxNQUFJSCxFQUFVLEdBQUdELFFBQVEsQ0FBQ1YsSUFBSSxDQUFDa0IsS0FBTCxDQUFXSixPQUFPLEdBQUcsQ0FBckIsRUFBd0JHLE9BQXhCLENBQUQsQ0FBekI7QUFDQSxNQUFJTCxFQUFVLEdBQUdGLFFBQVEsQ0FBQ1YsSUFBSSxDQUFDa0IsS0FBTCxDQUFXRCxPQUFPLEdBQUcsQ0FBckIsQ0FBRCxDQUF6QjtBQUVBVixFQUFBQSxFQUFFLElBQUssZUFBTyxFQUFQLEVBQWEsQ0FBYixDQUFQO0FBQ0FJLEVBQUFBLEVBQUUsSUFBSSxLQUFOO0FBQ0FDLEVBQUFBLEVBQUUsSUFBSSxJQUFOO0FBRUEsU0FBT0wsRUFBRSxHQUFHSSxFQUFMLEdBQVVDLEVBQWpCO0FBRUQ7QUFFRDs7Ozs7Ozs7O0FBT0EsSUFBTVYsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2lCLENBQUQsRUFBcUI7QUFFckMsU0FBTyxDQUFDQyxLQUFLLENBQUNqQixVQUFVLENBQUNnQixDQUFELENBQVgsQ0FBTixJQUF5QkUsUUFBUSxDQUFDRixDQUFELENBQXhDO0FBRUQsQ0FKRDtBQU1BOzs7Ozs7Ozs7QUFPQSxJQUFNTixHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDTSxDQUFELEVBQWtDO0FBRTVDLE1BQUlBLENBQUMsR0FBRyxFQUFSLEVBQVksa0JBQVdBLENBQVg7QUFFWixTQUFPQSxDQUFQO0FBRUQsQ0FORCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIEF1dG9tYXRpY2FsbHkgdHJ5IHRvIGRldGVybWluZSB3aGF0IHR5cGUgb2YgdGltZSB0aGUgaW5wdXQgaXMgYW5kIHJ1biB0aGUgY29udmVyc2lvblxyXG4gKiB0byBtYWtlIGl0IHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICogXHJcbiAqIFRoaXMgaXMgZWFzaWVyIHRvIHVzZSBidXQgYWxzbyByZWR1Y2VzIHJlYWRhYmlsaXR5LCBpbiBteSBvcGluaW9uLlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0aW1lIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBvciBhIHN0cmluZyB0byBjb252ZXJ0IHRvIHRoZSBvdGhlciB0eXBlLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG1zIEluZGljYXRlcyB3aGV0aGVyIHRoZSB0aW1lIGJlIHJldHVybmVkIGFzIG1pbGxpc2Vjb25kcyBvciBhcyAnaGg6bW06c3MnLlxyXG4gKiBcclxuICogQHJldHVybnMge251bWJlcnxzdHJpbmd9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvKHRpbWU6IChudW1iZXIgfCBzdHJpbmcpLCBtczogYm9vbGVhbiA9IHRydWUpOiAobnVtYmVyIHwgc3RyaW5nKSB7XHJcblxyXG4gIGlmIChpc051bWVyaWModGltZSkpIHtcclxuXHJcbiAgICB0aW1lID0gcGFyc2VGbG9hdCh0aW1lLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIGlmIChtcykgcmV0dXJuIHRpbWU7XHJcblxyXG4gICAgZWxzZSByZXR1cm4gbXNUb1RpbWUodGltZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZWxzZSB7XHJcblxyXG4gICAgaWYgKCFtcykgcmV0dXJuIHRpbWU7XHJcblxyXG4gICAgZWxzZSByZXR1cm4gdGltZVRvTXModGltZS50b1N0cmluZygpKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSB0aW1lIHZhbHVlIGZyb20gbWlsbGlzZWNvbmRzIHRvIGEgJ2hoOm1tOnNzJyBmb3JtYXQuXHJcbiAqIFxyXG4gKiBAc2luY2UgMi4wLjBcclxuICogXHJcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbXMgVGhlIHRpbWUgbWlnaHQgYmUgaW4gbWlsbGlzZWNvbmRzIGJ1dCBpdCBjb3VsZCBzdGlsbCBiZSBpbiBhIHN0cmluZy5cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0aW1lIGluICdoaDptbTpzcycgZm9ybWF0LlxyXG4gKi9cclxuZnVuY3Rpb24gbXNUb1RpbWUobXM6IChudW1iZXIgfCBzdHJpbmcpKTogc3RyaW5nIHtcclxuXHJcbiAgY29uc3QgaGg6IG51bWJlciA9IE1hdGguZmxvb3IoKChwYXJzZUludChtcy50b1N0cmluZygpKSAvIDEwMDApIC8gMzYwMCkpO1xyXG4gIGNvbnN0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKCgoKHBhcnNlSW50KG1zLnRvU3RyaW5nKCkpIC8gMTAwMCkgLyA2MCkgJSA2MCkpO1xyXG4gIGNvbnN0IHNzOiBudW1iZXIgPSBNYXRoLmZsb29yKCgocGFyc2VJbnQobXMudG9TdHJpbmcoKSkgLyAxMDAwKSAlIDYwKSk7XHJcblxyXG4gIHJldHVybiBgJHtwYWQoaGgpfToke3BhZChtbSl9OiR7cGFkKHNzKX1gO1xyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSB0aW1lIHZhbHVlIGZyb20gJ2hoOm1tOnNzJyBmb3JtYXQgdG8gbWlsbGlzZWNvbmRzLlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHRpbWUgVGhlIHRpbWUgbWlnaHQgYmUgaW4gJ2hoOm1tOnNzJyBmb3JtYXQuXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMuXHJcbiAqL1xyXG5mdW5jdGlvbiB0aW1lVG9Ncyh0aW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cclxuICBjb25zdCBoaEluZGV4OiBudW1iZXIgPSB0aW1lLmluZGV4T2YoJzonKTtcclxuICBjb25zdCBtbUluZGV4OiBudW1iZXIgPSB0aW1lLmluZGV4T2YoJzonLCBoaEluZGV4ICsgMSk7XHJcbiAgY29uc3Qgc3NJbmRleDogbnVtYmVyID0gdGltZS5pbmRleE9mKCc6JywgbW1JbmRleCk7XHJcblxyXG4gIGxldCBoaDogbnVtYmVyID0gcGFyc2VJbnQodGltZS5zbGljZSgwLCBoaEluZGV4KSk7XHJcbiAgbGV0IG1tOiBudW1iZXIgPSBwYXJzZUludCh0aW1lLnNsaWNlKGhoSW5kZXggKyAxLCBzc0luZGV4KSk7XHJcbiAgbGV0IHNzOiBudW1iZXIgPSBwYXJzZUludCh0aW1lLnNsaWNlKHNzSW5kZXggKyAxKSk7XHJcblxyXG4gIGhoICo9ICgzLjYgKiAoMTAgKiogNikpO1xyXG4gIG1tICo9IDYwMDAwO1xyXG4gIHNzICo9IDEwMDA7XHJcblxyXG4gIHJldHVybiBoaCArIG1tICsgc3M7XHJcblxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYSBwcm92aWRlZCB2YWx1ZSBpcyBhIG51bWJlci5cclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gbiBUaGUgdmFsdWUgdG8gY2hlY2suXHJcbiAqIFxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBudW1iZXIgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuICovXHJcbmNvbnN0IGlzTnVtZXJpYyA9IChuOiBhbnkpOiBib29sZWFuID0+IHtcclxuXHJcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYSBsZWFkaW5nIDAgdG8gYSBudW1iZXIgYmVsb3cgMTAuXHJcbiAqIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIGFkZCBhIGxlYWRpbmcgemVybyB0by5cclxuICogXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfSBUaGUgcGFkZGVkIG9yIG9yaWdpbmFsIG51bWJlci5cclxuICovXHJcbmNvbnN0IHBhZCA9IChuOiBudW1iZXIpOiAoc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcblxyXG4gIGlmIChuIDwgMTApIHJldHVybiBgMCR7bn1gO1xyXG5cclxuICByZXR1cm4gbjtcclxuXHJcbn0iXX0=