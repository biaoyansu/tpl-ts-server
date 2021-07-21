export const route = {
  '/': 'Yo',
  '/fn-string': (req, res) => parseFloat(req.$query.a) + parseFloat(req.$query.b) + '',
  '/fn-object': () => { return { a: 1, b: 2 };},
  '/string': 'This is a test page.',
  '/object': { name: 'whh', age: 18 },
  '/array': [ 1, 2, 3 ],
};
