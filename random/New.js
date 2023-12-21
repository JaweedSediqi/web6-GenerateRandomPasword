const pasbox=document.getElementById('paswoord');
let lenhgt=12;
  let number="122334983243584378";
  let uppercase="kdfjskdfjsdkfsjfkkj";
  let symbol="/.,+)(";
  let lovercase="IEFJIOEWFWEIFOFSMFSKDF";
  let x=number+symbol+lovercase+uppercase;
function king() {
        let sum="";
     
while(lenhgt>sum.length){
    sum+=x[Math.floor(Math.random()*x.length)];
}
pasbox.value=sum;
}


function copying() {
    pasbox. select();
    document.execCommand('copy');

}
