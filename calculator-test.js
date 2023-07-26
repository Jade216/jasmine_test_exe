
describe('loan calculator test', function () {

  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
      amount: 150000,
      years: 15,
      rate: 3.5
    }
    expect(calculateMonthlyPayment(values)).toEqual('1072.32')
  });

  it("should return a result with 2 decimal places", function () {
    // ..
    const values = {
      amount: 150095,
      years: 15,
      rate: 3.5
    }
    expect(calculateMonthlyPayment(values)).toEqual('1073.00')
  });

  /// etc
})

