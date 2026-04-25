if(document.querySelector('time')){
const text=document.querySelector('main').innerText;
const wordcount=text.split(' ').length;
const readingtime=Math.ceil(wordcount/200);
document.querySelector('time') .insertAdjacentText('afterend',` - ${readingtime} min read`);
}
const toggle=document.querySelector('#theme-toggle');
toggle.addEventListener('click', function(){
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        toggle.textContent='🌙';
    }else{
        toggle.textContent='☀️';
    }
});