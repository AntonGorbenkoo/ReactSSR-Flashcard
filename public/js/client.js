/* eslint-disable no-unused-vars */
async function getAnswer(event) {
  event.preventDefault();
  const num = event.target.id;
  const themeNum = num.slice(0, num.indexOf('_'));
  const questionNum = num.slice(num.indexOf('_') + 1);
  const res = await fetch('/question/check', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      themeNum,
      questionNum,
    }),
  });
  const { answ } = await res.json();
  //   if (!answ) {вопросы закончились}
  if (answ === event.target.inputAnswer.value) {
    const isOk = await fetch('/counter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inc: true,
      }),
    });
    const { servAnsw } = await isOk.json();
    if (document.querySelector('#nextQuest')) document.querySelector('.nextQuest').remove();
    // document.getElementById('inputField').disabled = true;
    document.getElementById('buttonField').disabled = true;
    const rightAnswerHTML = `<p class="blue">Это правильный ответ!</p>
                             <form id="nextQuest" method="get" action="/question/${themeNum}/${((+questionNum) + 1)}">
                             <p><input class="btn btn-outline-primary" type="submit" value="Следующий вопрос" /></p>
                             </form>`;

    document.querySelector('.qDiv').innerHTML = rightAnswerHTML;

  } else {
    if (document.querySelector('#nextQuest')) document.querySelector('.nextQuest').remove();
    document.getElementById('buttonField').disabled = true;
    const notrightAnswerHTML = `<p class="red">Это неправильный ответ!</p>
                                <p>Правильный ответ:</p>
                                <p class="blue">${answ}</p>
                             <form id="nextQuest" method="get" action="/question/${themeNum}/${((+questionNum) + 1)}">
                             <p><input class="btn btn-outline-primary" type="submit" value="Следующий вопрос" /></p>
                             </form>`;

    document.querySelector('.qDiv').innerHTML = notrightAnswerHTML;

  }
}

if (document.querySelector('.questionForm')) {
  document.querySelector('.questionForm').addEventListener('submit', getAnswer);
}
