const text=document.querySelector('main').innerText;
const wordcount=text.split(' ').length;
const readingtime=Math.ceil(wordcount/200);
document.querySelector('time') .insertAdjacentText('afterend',` - ${readingtime} min read`);