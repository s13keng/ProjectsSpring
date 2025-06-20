// Lets Jeopardy!

// Array of category objects with id and title
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;
let categories = [];

async function getCategories() {
  let res = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?count=100`);
  let catIDs = _.sampleSize(res.data, NUM_CATEGORIES).map(c => c.id);
  return catIDs;
}

async function getCategory(catId) {
  let res = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${catId}`);
  let clues = _.sampleSize(res.data.clues, NUM_QUESTIONS_PER_CAT);
  return {
    title: res.data.title,
    clues: clues.map(clue => ({
      question: clue.question,
      answer: clue.answer,
      showing: null
    }))
  };
}

async function setupAndRender() {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('jeopardy').style.display = 'none';

  const catIDs = await getCategories();

  categories = [];
  for (let id of catIDs) {
    try {
      const cat = await getCategory(id);
      categories.push(cat);
    } catch (err) {
      console.error("Failed to load category", id);
    }
  }

  fillTable();
  document.getElementById('loading').style.display = 'none';
  document.getElementById('jeopardy').style.display = 'table';
}

function fillTable() {
  const $catRow = document.getElementById('categories-row');
  const $body = document.getElementById('clues-body');

  $catRow.innerHTML = '';
  $body.innerHTML = '';

  for (let cat of categories) {
    const th = document.createElement('th');
    th.innerText = cat.title.toUpperCase();
    $catRow.appendChild(th);
  }

  for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < NUM_CATEGORIES; j++) {
      const td = document.createElement('td');
      td.innerText ='100';
      td.setAttribute('data-cat', j);
      td.setAttribute('data-clue', i);
      td.addEventListener('click', handleClick);
      tr.appendChild(td);
    }
    $body.appendChild(tr);
  }
}

function handleClick(evt) {
  const td = evt.target;
  const catIdx = td.getAttribute('data-cat');
  const clueIdx = td.getAttribute('data-clue');

  const clue = categories[catIdx].clues[clueIdx];

  if (clue.showing === null) {
    td.innerText = clue.question;
    clue.showing = 'question';
  } else if (clue.showing === 'question') {
    td.innerText = clue.answer;
    clue.showing = 'answer';
  }
}

document.getElementById('play').addEventListener('click', setupAndRender);
