const {
    compareTrees,
    Node
} = require("./index");




describe("Basic test", () => {
    let a, b, c, d, e, f, g, h, i, j, k, l;
    beforeAll(() => {
        // Nodes
        a = new Node("1");
        b = new Node("2");
        c = new Node("3");
        a.left = b;
        a.right = c;

        d = new Node("1");
        e = new Node("2");
        f = new Node("3");
        d.left = e;
        d.right = f;

        g = new Node("1");
        h = new Node("3");
        i = new Node("2");
        g.left = h;
        g.right = i;

        j = new Node("1");
        k = new Node("3");
        l = new Node("2");
        j.left = k;
        k.left = l;
    });

    it("should return true if trees are equal", () => {
        expect(compareTrees(a, d)).toBe(true);
    });

    it("should return false if trees have different values", () => {
        expect(compareTrees(a, g)).toBe(false);
    });

    it("should return false if trees have different structure", () => {
        expect(compareTrees(a, j)).toBe(false);
    });

});