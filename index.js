const btn = document.querySelector('button');
const info = document.querySelector('#info');
btn.addEventListener('click',async function(e){
   const a = await axios.get("https://api.lolimi.cn/API/AI/wr.php",{params:{msg: test.value}})
   let num = Math.floor(Math.random()*a.data.data.output.length)
   console.log(a.data.data.output);
   info.insertAdjacentHTML("beforeend",`<li>${a.data.data.output.join(",")}</li>`)
})
