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


function requiredParams(param) {
  throw new Error(`${param} es un obligatorio`);
};

function LearningPath({
  name = requiredParams('name'),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParams('name'),
  email = requiredParams('email'),
  age,
  facebook,
  instagram,
  twitter,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.facebook = facebook;
  this.instagram = instagram;
  this.twitter = twitter;
  this.approvedCourses = approvedCourses;

  const private = {
    _learningPaths: [],
  }

  Object.defineProperty(this, 'learningPaths', {
    get () {
      return private._learningPaths;
    },
  
    set (newLP) {
      if (!(newLP instanceof LearningPath)) {
      console.warn(`Alugna Learning Path no es valida`);
      } else {
      private._learningPaths.push(newLP);
      }
    },    
  });

  if (isArray(learningPaths)) {
    for (let learningPathIndex in learningPaths) {
      this.learningPaths = learningPaths[learningPathIndex];
    }
  };

  
};

const impostor = {
  name: 'Raro',
  courses: ['Nuevo curso'],
};

const escuelaWeb = new LearningPath({  
  name: 'Escuela de desarrollo Web',
  courses: ['HTML'],
});

const escuelaData = new LearningPath({  
  name: 'Escuela de Data',
  courses: ['Python'],
});

const escuelaDesing = new LearningPath({  
  name: 'Escuela de Desing',
  courses: ['PhotoShop'],
});

const kev = new Student({
  name: 'Kevin',
  email: 'kevingarcore@gmail.com',
  learningPaths: [
    escuelaData, 
    escuelaWeb,
    impostor,
    escuelaDesing,
  ],
});