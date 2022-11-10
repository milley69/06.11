document.getElementById('bh').onclick = function() {
    document.getElementById('del').classList.add('he_all');
    setTimeout(bbblock, 600);
}

function bbblock() {
    document.getElementById("del").remove();
    document.getElementById('maps').style.opacity = '1';
    document.getElementById('faces').style.opacity = '1';
}
document.getElementById('rub180Q').onchange = function() {
    if (this.value == '180') {
        document.getElementById('rub180').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('bestiaryQ').onchange = function() {
    if (this.value == 'Бестиарий' || this.value == 'бестиарий') {
        document.getElementById('bestiary').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('radiationQ').onchange = function() {
    if (this.value == 'Да' || this.value == 'Нет' || this.value == 'да' || this.value == 'нет') {
        document.getElementById('radiation').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('salamQ').onchange = function() {
    if (this.value == 'Алейкум' || this.value == 'алейкум') {
        document.getElementById('salam').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('horsQ').onchange = function() {
    if (this.value == '15.09.2019') {
        document.getElementById('hors').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('marryQ').onchange = function() {
    if (this.value == 'Настя' || this.value == 'У сестры') {
        document.getElementById('marry').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('snowQ').onchange = function() {
    if (this.value == 'Чичипидо' || this.value == 'чичипидо') {
        document.getElementById('snow').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('jiQ').onchange = function() {
    if (this.value == 'Есть' || this.value == 'есть') {
        document.getElementById('ji').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('shitQ').onchange = function() {
    if (this.value == 'Сервис на транспорте' || this.value == 'сервис на транспорте') {
        document.getElementById('shit').classList.remove('lock');
        document.getElementById('shit2').classList.remove('lock');
        this.remove();
    }
};
document.getElementById('birdQ').onchange = function() {
    if (this.value == 'Да' || this.value == 'Нет' || this.value == 'да' || this.value == 'нет') {
        document.getElementById('bird').classList.remove('lock');
        document.getElementById('bird2').classList.remove('lock');
        this.remove();
    };
};
document.getElementById('poopQ').onchange = function() {
    if (this.value == 'Какашка' || this.value == 'какашка') {
        document.getElementById('poop').classList.remove('lock');
        document.getElementById('poop2').classList.remove('lock');
        this.remove();
    }
};
// let count = 0;
let count = [53, 57, 43, 71, 99, 53, 75, 91, 77, 44, 88, 53, 42, 150];
document.getElementById('rub180').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[0] += 1;
        document.getElementById('rub180L').innerHTML = count[0];
    }
}
document.getElementById('bestiary').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[0] += 1;
        count[1] += 1;
        document.getElementById('bestiaryL').innerHTML = count[1];
    }
}
document.getElementById('radiation').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[2] += 1;
        document.getElementById('radiationL').innerHTML = count[2];
    }
}
document.getElementById('salam').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[3] += 1;
        document.getElementById('salamL').innerHTML = count[3];
    }
}
document.getElementById('hors').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[4] += 1;
        document.getElementById('horsL').innerHTML = count[4];
    }
}
document.getElementById('marry').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[5] += 1;
        document.getElementById('marryL').innerHTML = count[5];
    }
}
document.getElementById('snow').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[6] += 1;
        document.getElementById('snowL').innerHTML = count[6];
    }
}
document.getElementById('ji').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[7] += 1;
        document.getElementById('jiL').innerHTML = count[7];
    }
}
document.getElementById('shit').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[8] += 1;
        document.getElementById('shitL').innerHTML = count[8];
    }
}
document.getElementById('shit2').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[9] += 1;
        document.getElementById('shit2L').innerHTML = count[9];
    }
}
document.getElementById('bird').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[10] += 1;
        document.getElementById('birdL').innerHTML = count[10];
    }
}
document.getElementById('bird2').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[11] += 1;
        document.getElementById('bird2L').innerHTML = count[11];
    }
}
document.getElementById('poop').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[12] += 1;
        document.getElementById('poopL').innerHTML = count[12];
    }
}
document.getElementById('poop2').onclick = function() {
    if (this.classList.contains('lock') == false) {
        let like = document.createElement('span');
        like.className = "qLike";
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.append(like);
        setTimeout("document.querySelector('.qLike').remove()", 600);
        count[13] += 1;
        document.getElementById('poop2L').innerHTML = count[13];
    }
}