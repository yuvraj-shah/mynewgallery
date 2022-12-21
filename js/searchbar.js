function openPage() {
    var x = document.getElementById("search").value;
  
    if (x === "home") {
        window.open("index.html","_self");
    }
    if (x === "Home") {
        window.open("index.html","_self");
    }
    if (x === "photo") {
        window.open("index.html","_self");
    }
    if (x === "photoes") {
        window.open("index.html","_self");
    }
    if (x === "Photo") {
        window.open("index.html","_self");
    }
    if (x === "Photoes") {
        window.open("index.html","_self");
    }
  
    if (x === "Yuvraj Shah") {
        window.open("author.html","_self");
    }
    if (x === "yuvraj shah") {
        window.open("author.html","_self");
    }
    if (x === "Yuvraj") {
        window.open("author.html","_self");
    }
    if (x === "yuvraj") {
        window.open("author.html","_self");
    }
  
   
  
  
    if (x === "video") {
        window.open("post.html","_self");
    }
    if (x === "videos") {
        window.open("post.html","_self");
    }
    if (x === "Video") {
        window.open("post.html","_self");
    }
    if (x === "Videos") {
        window.open("post.html","_self");
    }
  
    if (x === "Mobile") {
        window.open("tel:+917285047313");
    }
  
    if (x === "mobile") {
        window.open("tel:+917285047313");
    }
    if (x === "mobile number") {
        window.open("tel:+917285047313");
    }
  
    if (x === "phone number") {
        window.open("tel:+917285047313");
    }
  
    if (x === "Mobile number") {
        window.open("tel:+917285047313");
    }
  
    if (x === "Phone number") {
        window.open("tel:+917285047313");
    }
  
    if (x === "phone") {
        window.open("tel:+917285047313");
    }
  
    if (x === "Phone") {
        window.open("tel:+917285047313");
    }
  
    if (x === "call") {
        window.open("tel:+917285047313");
    }
  
    if (x === "Call") {
        window.open("tel:+917285047313");
    }
  
    if (x === "mail") {
        window.open("mailto: shahyuvrajp@gmail.com");
    }
  
    if (x === "Mail") {
        window.open("mailto: shahyuvrajp@gmail.com");
    }
  
    if (x === "email") {
        window.open("mailto: shahyuvrajp@gmail.com");
    }
  
    if (x === "Email") {
        window.open("mailto: shahyuvrajp@gmail.com");
    }
  
    if (x === "Gmail") {
        window.open("mailto: shahyuvrajp@gmail.com");
    }
  
    if (x === "gmail") {
        window.open("mailto: shahyuvrajp@gmail.com");
    }
  
    if (x === "payment") {
        window.open("https://p.paytm.me/xCTH/mparg591");
    }
  
    if (x === "Payment") {
        window.open("https://p.paytm.me/xCTH/mparg591");
    }
  
    if (x === "Paytm") {
        window.open("https://p.paytm.me/xCTH/mparg591");
    }
  
    if (x === "paytm") {
        window.open("https://p.paytm.me/xCTH/mparg591");
    }
  
    if (x === "paypal") {
        window.open("https://paypal.me/yuvrajshah1999?country.x=IN&locale.x=en_GB");
    }
  
    if (x === "Paypal") {
        window.open("https://paypal.me/yuvrajshah1999?country.x=IN&locale.x=en_GB");
    }
  
    if (x === "facebook") {
        window.open("http://www.facebook.com/yuvraj.shah.7359447");
    }
    if (x === "Facebook") {
        window.open("http://www.facebook.com/yuvraj.shah.7359447");
    }
    if (x === "Social media") {
        window.open("http://www.facebook.com/yuvraj.shah.7359447");
    }
    if (x === "social media") {
        window.open("http://www.facebook.com/yuvraj.shah.7359447");
    }
  
    if (x === "social media") {
        window.open("http://www.facebook.com/yuvraj.shah.7359447");
    }
  
    if (x === "Social media") {
        window.open("https://www.instagram.com/yuvrajshah_/");
    }
  
    if (x === "instagram") {
        window.open("https://www.instagram.com/yuvrajshah_/");
    }
  
    if (x === "Instagram") {
        window.open("https://www.instagram.com/yuvrajshah_/");
    }
    if (x === "post") {
        window.open("https://www.instagram.com/yuvrajshah_/");
    }
  
    else {
    windows.alert('Not found or opened in a new tab.');
    }
  }
  
  
  
  
  
  
  
  
  
  // getting all required elements
  // const searchWrapper = document.querySelector(".search-input");
  // const inputBox = searchWrapper.querySelector("input");
  // const suggBox = searchWrapper.querySelector(".autocom-box");
  // const icon = searchWrapper.querySelector(".icon");
  // let linkTag = searchWrapper.querySelector("a");
  // let webLink;
  // if user press any key and release
  // inputBox.onkeyup = (e)=>{
  //     let userData = e.target.value; //user enetered data
  //     let emptyArray = [];
  //     if(userData){
  //         icon.onclick = ()=>{
  //             webLink = `https://www.google.com/search?q=${userData}`;
  //             linkTag.setAttribute("href", webLink);
  //             linkTag.click();
  //         }
  //         emptyArray = suggestions.filter((data)=>{
              //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          //     return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
          // });
          // emptyArray = emptyArray.map((data)=>{
          //     // passing return data inside li tag
          //     return data = `<li>${data}</li>`;
          // });
          // searchWrapper.classList.add("active"); //show autocomplete box
          // showSuggestions(emptyArray);
          // let allList = suggBox.querySelectorAll("li");
          // for (let i = 0; i < allList.length; i++) {
              //adding onclick attribute in all li tag
      //         allList[i].setAttribute("onclick", "select(this)");
      //     }
      // }else{
      //     searchWrapper.classList.remove("active"); //hide autocomplete box
  //     }
  // }
  // function select(element){
  //     let selectData = element.textContent;
  //     inputBox.value = selectData;
  //     icon.onclick = ()=>{
  //         webLink = `https://www.google.com/search?q=${selectData}`;
  //         linkTag.setAttribute("href", webLink);
  //         linkTag.click();
  //     }
  //     searchWrapper.classList.remove("active");
  // }
  // function showSuggestions(list){
  //     let listData;
  //     if(!list.length){
  //         userValue = inputBox.value;
  //         listData = `<li>${userValue}</li>`;
  //     }else{
  //       listData = list.join('');
  //     }
  //     suggBox.innerHTML = listData;
  // }
  