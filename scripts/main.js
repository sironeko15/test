const myImage = document.querySelector("img");
//docmentの中のimgを見れる。っていう動作をmyImageに格納してる。


myImage.onclick = () => {
    /*onclickというイベントハンドラープロパティに無名関数を代入すると、
    この要素がクリックされる度に、下の動きをする（if分）*/
    const mySrc = myImage.getAttribute("src");
    //imgのsrcを取得する。それをmySrcに格納してる。
    if (mySrc === "images/kawaii2.jpg") {
        myImage.setAttribute("src", "images/kubikiri2.png");
    }
    else {
        myImage.setAttribute("src", "images/kawaii2.jpg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
//querySelector関数を使って、htmlのbutton,h1を参照するを格納。

function setUserName() {
    const myName = prompt("キミの名前を入力してね♪");
    //prompt()はユーザーにデータ入力するよう求め、
    //OKを押したら変数にデータが格納される。
    localStorage.setItem("name", myName);
    //localStorageというAPIを呼び出して、setitem関数()を使い
    //nameタグを作って、myNameに入っているデータを格納
    myHeading.textContent = `Mzilla はかっこいいよ、${myName}さん、Mozilla はかっこいいよ。`;
    //見出しh1を参照する。を格納したmyHeadingへ
    //テキストとlocalStorageのnameタグに格納したmyNameを格納
}

if (!localStorage.getItem("name")) {
    //nameのデータが存在してない、ならば（そのための、最初の！否定）
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
    setUserName();
    //htmlのbuttonを参照する。が格納されているmyButtonをクリックすると
    //setUserName()が実行される。
};

function setUserName(){
    const myName=prompt("キミの名前を入力してね♪");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent=`${myName}さん、Mzillaはかっこいいよ。`;
    }
}