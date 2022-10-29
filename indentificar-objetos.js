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

function createLearningPath({
  name = requiredParams('name'),
  courses = [],
}) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    get name() {
      return private._name;
    },

    set name(newName) {
      if (newName.length != 0) {
        private._name = newName;
      } else {
        console.warn('Tu nombre debe contener al menos un caracter');
      }
    },

    get courses(){
      return private._courses;
    }
  };


  return public;
}

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
    _learningPaths: learningPaths,
  }

  const public = {
    email,
    age,
    approvedCourses,
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
        console.warn('Tu nombre debe contener al menos un caracter');
      }
    },

    get learningPaths() {
      return private._learningPaths;
    },

    set learningPaths(newLP) {
      if(!newLP.name) {
        console.warn('La learningpath debe tener nombre');
        return;
      }
      if(!newLP.courses) {
        console.warn('La lista de cursos no puede estar vacia')
        return;
      }
      if(!isArray(newLP.courses)) {
        console.warn('Courses no es una lista valida');
        return;
      }

      private._learningPaths.push(newLP);
    }
  }

  return public;
}

const kev = createStudent({
  name: 'Kevin',
  email: 'kevingarcore@gmail.com',
});

const escuelaWeb = createLearningPath({  
  name: 'Escuela de desarrollo Web',
  courses: ['Curso 1', 'curso 2']
});