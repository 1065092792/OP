const btn = document.querySelector('button');
const info = document.querySelector('#info');
const audio = document.querySelector('audio');
btn.addEventListener('click', async function (e) {
   try {
      const a = await axios.get("https://api.lolimi.cn/API/AI/bj.php",{params:{msg:test.value}})
      const b= await axios.get("https://api.lolimi.cn/API/yyhc/y.php",{params:{msg:a.data.data.output,speaker:"派蒙",noisew:"0.5",sdp:"2",Length:"1",noise:"0.6",type:"1"}})
      audio.src = b.data.music
      audio.play()
      info.insertAdjacentHTML("beforeend",`<li>${a.data.data.output}</li>`)
      console.log(b);
   } catch (error) {
      console.log(error);
   }
   
})
