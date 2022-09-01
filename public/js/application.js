async function getAnswer(event) {
  event.preventDefault();
  const num = event.target.id;
  const themeNum = num.slice(0,num.IndexOf('_'));
  const questionNum = num.slice(num.IndexOf('_')+1);
  const res = await fetch(`/question/check/:${themeNum}/:${questionNum}`);
  const { answ } = await res.json();
  if (!answ) // вопросы закончились
  if (answ === inputAnswer) {
    const isOk = await fetch('/counter');
    const { servAnsw } = await isOk.json();
    const rightAnswerHTML = `<p>Это правильный ответ!</p>
                             <form id="nextQuest" method="get" action="/question/:${themeNum}/:${((+questionNum)+1).toString()}">
                             <p><input type="submit" value="Следующий вопрос" /></p>
                             </form>`
    document.querySelector('.questionForm').insertAdjacentHTML(rightAnswerHTML, 'afterend');
  }
  else {
    const rightAnswerHTML = `<p>Это неправильный ответ!</p>
                             <form id="nextQuest" method="get" action="/question/:${themeNum}/:${((+questionNum)+1).toString()}">
                             <p><input type="submit" value="Следующий вопрос" /></p>
                             </form>`
    document.querySelector('.questionForm').insertAdjacentHTML(rightAnswerHTML, 'afterend');
  }
};

if (document.querySelector('.questionForm')){
    document.querySelector('.questionForm').addEventListener('submit', getAnswer);
}