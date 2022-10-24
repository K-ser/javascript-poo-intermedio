const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },

  editA() {
    this.a = 'AAAAA';
  }
};

function isObject(subject) {
  return typeof subject == 'object';
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copy;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copy = [];
  } else if (subjectIsObject) {
    copy = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copy[key] = deepCopy(subject[key]);
    } else if (subjectIsArray) {
      copy.push(subject[key]);
    } else {
      copy[key] = subject[key];
    }
  }

  return copy;
}

