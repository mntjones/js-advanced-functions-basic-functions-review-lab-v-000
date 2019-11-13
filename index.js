// Your code here
function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(para="*") {
  return function(adj="special") {
    return `You are ${para}${adj}${para}!`
  };
}

const Calculator = {
  add : function(n1,n2) { 
       return n1 + n2;
  },
    
  subtract : function(n1, n2) {
    return n1 -n2;
  },
  
  multiply : function(n1,n2) {
    return n1 * n2;
  },
  
  divide: function(n1, n2) {
    return n1/n2;
  }
};

function actionApplyer(int, array) {
  
  let sum = int;
  
  array.forEach(meth => {
      return sum = meth(sum);
  });
  
  // if array is empty
  return int;
}

// function actionApplyer(s, arr) {
// 	let a = s;
	
// 	arr.forEach(i => {
// 		return a = i(a);
// 	});

// 	return a;
// }