const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});



test('Reverse reverses a string', () => {
  //Arrange
  let str = 'abcd';
  let expectedStr = 'dcba';
  let reversedStr;

  //Act
  reversedStr = reverse(str);

  //Assert
  expect(reversedStr).toEqual(expectedStr);
});


//Extra
/* const calculateSum = (a, b) => { return a + b }

test('test that 1 + 1 equals 2', () => {
  //Arrange 
  let a = 1, b = 1;
  let expectedResult = 2;
  let actualResult;
  //Act
  actualResult = calculateSum(a, b);
  //Assert
  expect(actualResult).toBe(expectedResult)
}) */
