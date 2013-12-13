describe('Variables scoping rules', function () {
        it('Should get access to var declared in innner block', function () {
            expect(x).toBeUndefined();
            if (window) {
                var x = 213;
                expect(x).toBeDefined();
            }
            expect(x).toBeDefined();
        });
        it('Shouldn\'t get access to var declared in inner function', function () {
            var x;
            var inner = function () {
                expect(x).toBeDefined();
                var x = 123;
            }
            expect(x).toBeUndefined();
        })
    }
)
