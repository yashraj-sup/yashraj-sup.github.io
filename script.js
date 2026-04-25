if(document.querySelector('time')){
const text=document.querySelector('main').innerText;
const wordcount=text.split(' ').length;
const readingtime=Math.ceil(wordcount/200);
document.querySelector('time') .insertAdjacentText('afterend',` - ${readingtime} min read`);
}
const bar=document.querySelector('#progress-bar');
window.addEventListener('scroll',function(){
    const scrolled=window.scrollY;
    const total=document.body.scrollHeight - window.innerHeight;
    const progress=(scrolled/total)*100;
    bar.style.width = progress+'%';
});
const toggle=document.querySelector('#theme-toggle');
toggle.addEventListener('click', function(){
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')){
        toggle.textContent='🌙';
    }else{
        toggle.textContent='☀️';
    }
});
const currentPage= window.location.pathname.split('/').pop();
const navlinks=document.querySelectorAll('nav a');
navlinks.forEach(function(link){
    if(link.getAttribute('href')===currentPage){
        link.style.color='#e0e0e0';
    }
});