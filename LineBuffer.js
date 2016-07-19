(function(window) {
    function LineBuffer(dim) {
        var tree = new Quadtree({ x: 0, y: 0, width: dim.x, height: dim.y }),
            local = {
            insert: insert,
            retrieve: retrieve,
            clear: clear
        };

        function insert(p1, p2) {
            var topLeft = p1.min(p2),
                dim = p1.max(p2).subtract(topLeft);
            
            tree.insert({
                x: topLeft.x,
                y: topLeft.y,
                width: dim.x,
                height: dim.y,
                p1: p1,
                p2: p2
            });
        }

        function retrieve(p, dim) {
            return tree.retrieve({
                x: p.x,
                y: p.y,
                width: dim.x,
                height: dim.y
            });
        }

        function clear() {
            tree.clear();
        }

        return local;
    }
    window.LineBuffer = LineBuffer;
})(window);