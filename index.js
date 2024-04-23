function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
  }




/*История вычислений=============================================*/
  let history = [];

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function addToHistory() {
  let result = document.getElementById('result').value;
  history.push(result);
  document.getElementById('history').innerHTML = history.join('<br>');
}

function calculate() {
  let result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
  addToHistory();
}

/*очистить историю*/
function clearHistory() {
    document.getElementById('history').innerHTML = '';
    history = [];
  }

/*Темы оформления====================================*/
function setTheme(theme) {
    document.body.className = theme + '-theme';
  }


/*Клавиатурная поддержка=======================*/
  function handleKeyPress(event) {
    let key = event.key;
    if (!isNaN(parseInt(key)) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
      appendToResult(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      clearResult();
    }
  }
