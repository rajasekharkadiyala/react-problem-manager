//import delay from './delay';

const problems = [
    {
        id:1,
        shortdescription:'sort using merge sort',
        description:'sort the given array using merge sort',
        category:'sorting',
        solution:'',
        solved:'false'
    },
    {
        id:2,
        shortdescription:'reverse string',
        description:'reverse a string using recursion',
        category:'recursion',
        solution:'',
        solved:'false'
    }
];

class ProblemApi{
    static getAllProblems(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(Object.assign([],problems));
            },1000);
        });
    }

    static saveProblem(problem) {
        problem = Object.assign({}, problem); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulate server-side validation
            if (!problem.shortdescription) {
              reject('Problem should have a short description');
            }
    
            if (problem.id) {
              const existingProbIndex = problems.findIndex(a => a.id == problem.id);
              problems.splice(existingProbIndex, 1, problem);
            } else {
              //Just simulating creation here.
              //The server would generate ids and watchHref's for new courses in a real app.
              //Cloning so copy returned is passed by value rather than by reference.
              problem.id = problems.length+1;
              problems.push(problem);
            }
    
            resolve(problem);
          }, 1000);
        });
      }
}

export default ProblemApi;