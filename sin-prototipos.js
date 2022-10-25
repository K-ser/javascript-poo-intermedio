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

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     facebook: undefined,
//     twitter: undefined,
//     instagram: undefined,
//   }
// }
// const kev = deepCopy(studentBase);
// Object.seal(kev);
// kev.name = 'Kevin';

function requiredParams(param) {
  throw new Error(`${param} es un obligatorio`);
};

function createStudent({
  name = requiredParams('name'),
  email = requiredParams('email'),
  age,
  facebook,
  instagram,
  twitter,
  approvedCourses = [],
  learningPaths = [],
} = {}) { 

  const private = {
    _name: name,
  }

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      facebook,
      twitter,
      instagram,
    },

    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName.length != 0) {
        private._name = newName;
      } else {
        console.warn('El nombre debe contener al menos un caracter');
      }
    },

  //   readName() {
  //     return private._name;
  //   },

  //   changeName(newName) {
  //     private._name = newName;
  //   },
  };

  // Object.defineProperty(public, 'readName', {
  //   configurable: false,
  //   writable: false,
  // });

  // Object.defineProperty(public, 'changeName', {
  //   configurable: false,
  //   writable: false,
  // });

  return public;
}

const kev = createStudent({
  name: 'Kevin',
  email: 'kevin@gamil.com',
  age: 25,
  instagram: 'kev.gar',
  facebook: 'KE Iv',
  twitter: 'k-gar',
})