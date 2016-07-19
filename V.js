(function(window) {
    function V(_x, _y) {
        var local = {
            add: add,
            subtract: subtract,
            div: div,
            distToOrigin: distToOrigin,
            dist: dist,
            dot: dot,
            equals: equals,
            min: min,
            max: max,
            isValid: isValid,
            clone: clone,
            x: _x,
            y: _y
        };

        return local;

        function add(v) {
            return new V(local.x + v.x, local.y + v.y)
        }

        function subtract(v) {
            return new V(local.x - v.x, local.y - v.y)
        }

        function div(v) {
            return new V(local.x / v.x, local.y / v.y)
        }

        function distToOrigin() {
            return Math.sqrt(local.x * local.x + local.y * local.y)
        }

        function dist(v) {
            var x = local.x - v.x,
                y = local.y - v.y

            return Math.sqrt(x * x + y * y)
        }

        function dot(v) {
            return new V(local.x * v.x, local.y * v.y)
        }

        function equals(v) {
            return local.x == v.x && local.y == v.y
        }

        function min(v) {
            return new V(Math.min(local.x, v.x), Math.min(local.y, v.y))
        }

        function max(v) {
            return new V(Math.max(local.x, v.x), Math.max(local.y, v.y))
        }

        function isValid() {
            return typeof local.x == "number" && typeof local.y == "number" && local.x == local.x && local.y == local.y
        }
        
        function clone() {
            return new V(local.x, local.y)
        }
    }
    window.V = V;
})(window);
