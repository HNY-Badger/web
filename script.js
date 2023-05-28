// Скрипты для мобильного меню
const mm_button = document.getElementsByClassName('menu-btn')[0];
const mm = document.getElementsByClassName('mobile-nav')[0];
function toggleMobileMenu(){
    mm_button.classList.toggle('is-active');
    mm.classList.toggle('is-active');
}

// Скрипты для изменения языка
const section_name = document.getElementsByClassName("section-name");
const text = document.getElementsByClassName("about-info");
var language = 'en';

function languageChange(){
    if (language == 'en'){
        section_name[0].innerHTML = 'Обо мне';
        text[0].children[0].innerHTML = `Привет, я Денис - UX/UI дизайнер <br class='mobile-break'> из Минска. <br class='desktop-break'> Интересуюсь дизайном <br class='mobile-break'> и всем, что с ним связано.`;
        text[0].children[1].innerHTML = `Я учусь на курсах <br class='mobile-break'> "Веб и мобильный <br class='mobile-break'> дизайн <br class='desktop-break'> интерфейсов" <br class='mobile-break'> в IT-Академии.`;
        text[0].children[2].innerHTML = `Готов реализовать отличные <br class='mobile-break'> проекты <br class='desktop-break'> с замечательными людьми.`;
        updated.innerHTML = `Обновлено: ${time}`;
        language = 'ru';
    }
    else{
        section_name[0].innerHTML = 'About me';
        text[0].children[0].innerHTML = `Hi, I\'m Denis - UX/UI designer from <br class='mobile-break'> Minsk. <br class='desktop-break'> I\'m interested in design and <br class='mobile-break'> everything connected with it.`;
        text[0].children[1].innerHTML = `I\'m studying at courses <br class='mobile-break'> "Web and mobile design <br class='desktop-break'> interfaces" <br class='mobile-break'> in IT-Academy.`;
        text[0].children[2].innerHTML = `Ready to implement excellent <br class='mobile-break'> projects <br class='desktop-break'> with wonderful people.`;
        updated.innerHTML = `Updated: ${time}`;
        language = 'en';
    }
}

// Скрипты для отоброжения времени обновления
const updated = document.getElementsByClassName("updated")[0];
var date;
var time;

updateTime();

function updateTime(){
    date = new Date();
    time = `${date.getHours()}:${date.getMinutes().toString().length < 2 ? '0' + date.getMinutes() : date.getMinutes()}`;
    updated.innerHTML = language == 'en' ? `Updated: ${time}` : `Обновлено: ${time}`;
    setTimeout(() => {
        updateTime();
    }, 60000);
}