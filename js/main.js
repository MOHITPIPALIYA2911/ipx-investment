// Blocked by CORS--------------------------------------------------------------------------------

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("https://doc.deepthought.education/files/ipx/list.json", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
//------------------------------------------------------------------------------------------------

if(details.statusCode === 200){
  let n =details.data.participants.length;
  for(let i=0;i<n;i++){
  var dataName = details.data.participants[i].firstName +' '+ details.data.participants[i].lastName;
  var dataProfile = details.data.participants[i].fileUrl;
  var dataFileName = details.data.participants[i].fileName;
  // var coverImg = "Cover img URL here";
  $("#sec8body").append(`
  <div class="footerBox2">
    <img src="img/paint.png" alt="painting" class="footerBoxImg"  />
    <table class="footerBoxTbl">
      <tr>
        <td rowspan="2"><img src="${dataProfile}" class="profPic" alt="" /></td>
        <td class="footerBoxTblTxt1"><b>${dataFileName}</b></td>
      </tr>
      <tr>
        <td class="footerBoxTblTxt1">Owned by - ${dataName}</td>
      </tr>
    </table>
    <div class="footerBoxPrc">
      <p class="footerBoxPrcTxt"><b>Price - INR 5,73,000</b></p>
      <button class="footerBoxPrcBtn">Buy now</button>
    </div>
  </div>
  `);
  }
};
$(".profPic").on("error" , function () {       //if profile pic is not available
  $(this).attr("src", "img/profile.png");
});


$("#sec2img").attr("src",list[0].projectIndividualNfts[0].coverFileUrl);
$("#projName").text(list[0].projectIndividualNfts[0].coverName);
$("#ownName").text(list[0].projectIndividualNfts[0].ownerName);
$("#prc").text(list[0].projectIndividualNfts[0].price);
$("#qty").text(list[0].projectIndividualNfts[0].qty);



$(document).ready(function () {                                         //toggle paragraph
  for (let i = 1; i <= 10; i++) {
    let h = "#h" + i;
    let b = "#b" + i;
    $(h).click(function () {
      $(b).toggle();
    });
  }
});

let boxNum = document.querySelectorAll(".footerBox2");                  //more from this next button appearance
if(boxNum.length < 5){
  $(".arowLR").css("display","none")
}


let prodContainers = [...document.querySelectorAll('#sec8body')];
let nxtBtn = [...document.querySelectorAll('#arowL')];
let preBtn = [...document.querySelectorAll('#arowR')];


prodContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
})
