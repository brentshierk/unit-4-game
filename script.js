
$(document).ready(function() {


var treeHealth = Math.floor(Math.random() * 120 + 1)
var currentHealth = 0;
var heal1 = Math.floor(Math.random() * 11+ 1);
var heal2 =  Math.floor(Math.random() * 11 + 1);
var heal3 =  Math.floor(Math.random() * 11 + 1);
var heal4 =  Math.floor(Math.random() * 11 + 1);
var wins  = 0;
var losses  = 0;



console.log(treeHealth);
console.log(heal1);
console.log(heal2);
console.log(heal3);
console.log(heal4);
$("#ancientHealth").text(treeHealth)
$('#box2').text(currentHealth);
$('#box3').text(wins);
$('#box4').text(losses);

function reset() {
   treeHealth = Math.floor(Math.random() * 120 + 1)
   currentHealth = 0;
   heal1 = Math.floor(Math.random() * 11+ 1);
   heal2 =  Math.floor(Math.random() * 11 + 1);;
   heal3 =  Math.floor(Math.random() * 11 + 1);;
   heal4 =  Math.floor(Math.random() * 11 + 1);;
   $("#ancientHealth").text(treeHealth)
   $('#box2').text(currentHealth);


}

//functions
if (treeHealth < 19) {
  treeHealth = 120;

}



function woo() {
  alert('Thanks for the healing!')
  wins++;
  $('#box3').text(wins)
  reset();

}
function fail() {
  alert('pesant you cant do simple addition?!?! (or my trees health was less than the any of the heals sorry bout dat)')
  losses++;
  console.log(losses);
  $('#box4').text(losses)
  reset();

}
  $('.heal1').on('click', function(){
    currentHealth = currentHealth + heal1;
    $('#box2').text(currentHealth);
    console.log(currentHealth)
    if (currentHealth == treeHealth) {
      woo() ;

    }else if(currentHealth > treeHealth){
      fail();
    }
  }) ;
  $('.heal2').on('click', function(){
    currentHealth = currentHealth + heal2;
    $('#box2').text(currentHealth);
    console.log(currentHealth)
    if (currentHealth == treeHealth) {
      woo();
    }else if(currentHealth > treeHealth){
      fail();
    }
  }) ;
  $('.heal3').on('click', function(){
    currentHealth = currentHealth + heal3;
    $('#box2').text(currentHealth);
    console.log(currentHealth)
    if (currentHealth == treeHealth) {
      woo();
    }else if(currentHealth > treeHealth){
      fail();
    }
  }) ;
  $('.heal4').on('click', function(){
    currentHealth = currentHealth + heal4 ;
    $('#box2').text(currentHealth);
    console.log(currentHealth)
    if (currentHealth == treeHealth) {
      woo();
    }else if(currentHealth > treeHealth){
      fail();
    }
  }) ;
});
