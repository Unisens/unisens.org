module.exports = function removeBlockquotesPlugin (md,  options) {
    function has(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function matches(obj, props) {
        for (var prop in props) {
            if (has(props, prop) && (props[prop] !== obj[prop])) {
                return false;
            }
        }
        return true;
    }

    function remove(array, from, to) {
        var amount = to - from;
        var items = array.splice(from, amount);
        return items.length;
    }

    function findToken(tokens, props, position) {
        for (var i = position, l = tokens.length; i < l; i++) {
            if (matches(tokens[i], props)) {
                return i;
            }
        }
        return -1;
    }

    md.core.ruler.after('block', 'remove_blockquote', function rule(state) {
        var tokens = state.tokens;

        for (var i = 0, l = tokens.length; i < l; i++) {
            // Find the opening tag of the next blockquote.
            var start = findToken(tokens, { type: 'blockquote_open' }, i);

            if (start === -1) {
                continue;
            }

            // Find the closing tag of the current block quote.
            var level = tokens[start].level;
            var end = findToken(tokens, { type: 'blockquote_close', level: level }, start + 1);

            if (end === -1) {
                continue;
            }
            remove(tokens, start, end);
        }
    });
}