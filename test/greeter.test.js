const Greeter = require('../src/greeter');

describe('Greeter', () => {
    context('when greeting', () => {
        it('greets expected person', () => {
            //Arrange - Given
            const greeter = new Greeter();

            //Act - When
            const resp = greeter.greet("Ibai");

            //Assert - Then
            expect(resp).to.equal("Kaixo Ibai!");
        });
    });
});