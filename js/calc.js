let problem = document.getElementById('problem');
let result = document.getElementById('result');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');

// ----------------------------------------------------------------- Numbers Functions ---------

numbers[0].onclick = function () {
  problem.textContent = problem.textContent + numbers[0].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, ''); // Remove any White Spaces Globally
};
numbers[1].onclick = function () {
  problem.textContent = problem.textContent + numbers[1].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[2].onclick = function () {
  problem.textContent = problem.textContent + numbers[2].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[3].onclick = function () {
  problem.textContent = problem.textContent + numbers[3].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[4].onclick = function () {
  problem.textContent = problem.textContent + numbers[4].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[5].onclick = function () {
  problem.textContent = problem.textContent + numbers[5].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[6].onclick = function () {
  problem.textContent = problem.textContent + numbers[6].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[7].onclick = function () {
  problem.textContent = problem.textContent + numbers[7].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[8].onclick = function () {
  problem.textContent = problem.textContent + numbers[8].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[9].onclick = function () {
  problem.textContent = problem.textContent + numbers[9].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};
numbers[10].onclick = function () {
  problem.textContent = problem.textContent + numbers[10].textContent;
  problem.textContent = problem.textContent.replace(/\s/g, '');
};

// ----------------------------------------------------------------- Operators Functions ---------

operators[0].onclick = function () {
  problem.innerHTML = '&nbsp;';
  result.innerHTML = 0;
};

operators[1].onclick = function () {
  if (eval(problem.textContent) >= 0) {
    problem.textContent = eval(problem.textContent) * -1;
    result.textContent = problem.textContent;
  }
};

operators[2].onclick = function () {
  if (eval(problem.textContent) >= 0 || eval(problem.textContent) < 0) {
    let x = eval(problem.textContent);
    result.textContent = x / 100;
    problem.textContent = result.textContent;
  }
};

operators[3].onclick = function () {
  if (eval(problem.textContent) >= 0 || eval(problem.textContent) < 0) {
    problem.textContent = problem.textContent + operators[3].textContent;
    problem.textContent = problem.textContent.replace(/\s/g, '');
  }
};

operators[4].onclick = function () {
  if (eval(problem.textContent) >= 0 || eval(problem.textContent) < 0) {
    problem.textContent = problem.textContent + '*';
    problem.textContent = problem.textContent.replace(/\s/g, '');
  }
};

operators[5].onclick = function () {
  if (eval(problem.textContent) >= 0 || eval(problem.textContent) < 0) {
    problem.textContent = problem.textContent + operators[5].textContent;
    problem.textContent = problem.textContent.replace(/\s/g, '');
  }
};

operators[6].onclick = function () {
  if (eval(problem.textContent) >= 0 || eval(problem.textContent) < 0) {
    problem.textContent = problem.textContent + operators[6].textContent;
    problem.textContent = problem.textContent.replace(/\s/g, '');
  }
};

operators[7].onclick = function () {
  if (eval(problem.textContent) >= 0 || eval(problem.textContent) < 0) {
    result.textContent = eval(problem.textContent);
    problem.textContent = result.textContent;
    problem.textContent = problem.textContent.replace(/\s/g, '');
  } else {
    result.textContent = result.textContent;
  }
};
