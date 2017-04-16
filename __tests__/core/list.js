import List from '~/core/list';

test('create list', () => {
  const list = List.of([0,1,2,3]).collect();
  expect(list.length).toBe(4);
});

test('each should affect to current array', () => {
  const array = [0,1,2,3];
  List.of(array).each((item, index, array) => array[index] = item * 2);
  for (let i = 0; i < array.length; ++i) {
    expect(array[i]).toBe(i * 2);
  }
});

test('map should not affect to current array', () => {
  const array = [
    { id: 0, name: 'a' },
    { id: 1, name: 'b' },
    { id: 2, name: 'c' },
    { id: 3, name: 'd' },
  ];
  const list = List.of(array).map(item => item.name).collect();
  expect(list[0]).toBe('a');
  expect(array[0].id).toBe(0);
});