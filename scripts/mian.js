/* 
* @Author: anchen
* @Date:   2018-07-30 19:17:39
* @Last Modified by:   anchen
* @Last Modified time: 2018-07-30 21:13:32
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/left.png') {
        myImage.setAttribute('src', 'images/sdg-logo-狗狗.svg');
    } else{
        myImage.setAttribute('src', 'images/left.png');
    };
    //sdg-logo-狗狗.svg
}

var myBtn = document.querySelector('button');
var myH1 = document.querySelector('h1');

function setUserName() {

    var myName = prompt('Pelase 输入 名称！');
    localStorage.setItem('name',myName);
    myH1.textContent = 'Mozilla is cool,' + myName;
}

if (!localStorage.getItem('name')) {
     setUserName();
    } else{
     var storedName = localStorage.getItem('name');
      myH1.textContent = 'Mozilla is cool, ' + storedName;
    }



myBtn.onclick = function() {
    setUserName();
}