//Q1 ans
let student = {
    "name": "David Rayy",
    "class": "VI",
    "rollno": "12"
  };
  let prop = [];for(let key in student)
  {
    prop.push(key);
  }
  
  console.log(student);
  
  //Q2 ans
  var student2 = student;
  delete student2.rollno;
  console.log(student);
  
  //Q3 ans
  console.log(Object.keys(student).length);
  
  //Q4 ans
  var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
  
  let prop2=[];for(let key in library)
  {
    console.log("book"+key);
    console.log(library[key].readingStatus);
  }
  
  //Q5 ans
  const pi = 3.14;
  let vol = function(r,h)
  {
    return (r * r * h * pi);
  }
  console.log( "The volume is : "+vol(3,5));
  
  console.log("Ques_6");
  var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
                  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
                  { title: 'Mockingjay: The Final Book of the Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
  
  
   let sortArray = (a, b) => {
    return a.title.localeCompare(b.title);
  };
  library.sort(sortArray);
  console.log(library);