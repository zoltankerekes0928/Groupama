let show = false

const details = [
  {
    id: "EPAYMT8556",
    method: "Bankkártya",
    date: "2019.06.25.",
    amount: "5000Ft",
    status: "Folymatban",
    attachment: true,
    idoszak: "2019. 04. 02 - 08. 01.",
    dijelőírás: "5000 ft",
    konyveltDij: "5000 ft",

  },
  {
    id: "12345678958",
    method: "Átutalás",
    date: "2019.06.25.",
    amount: "5000Ft",
    status: "Beérkezett",
    attachment: false,
    idoszak: "2019. 02. 02 - 05. 01.",
    dijelőírás: "5000 ft",
    konyveltDij: "5000 ft",

  },
  {
    id: "epayt8654894",
    method: "Bankkártya",
    date: "2019.06.25.",
    amount: "5000Ft",
    status: "Sikertelen",
    attachment: true,
    idoszak: "2019. 06. 02 - 07. 01.",
    dijelőírás: "5000 ft",
    konyveltDij: "5000 ft",

  },
  {
    id: "EPAYMT8654",
    method: "Bankkártya",
    date: "2019.06.25.",
    amount: "5000Ft",
    status: "Beérkezett",
    attachment: true,
    idoszak: "2019. 06. 02 - 07. 01.",
    dijelőírás: "5000 ft",
    konyveltDij: "5000 ft",

  }]

function getData() {
  const data = details.map((item, index) => {
    const { id, method, date, amount, status, attachment, idoszak, dijelőírás, konyveltDij } = item
    return (
      `<div class="details-container" >
            <div class="sectionOne">
                <div class="idNum onlyDesktop" id="${index}"><span class="onlyDesktop" onclick="showDetails(${index})"><i class="fa-solid fa-angle-right"></i></span>${id.substring(0, 7)}...</div>
                <div class="method onlyDesktop"><h3>${method}</h3></div>
                <div class="date"><h3 class="onlyMobile">Fizetési dátum:</h3>${date}</div>
                <div class="amount"><h3>${amount}</h3></div>
                <div class="dot">${status == "Beérkezett" || status == "Folymatban" ? `<i style="color:green" class="fa-solid fa-circle dot"></i>` : `<i style="color:red" class="fa-solid fa-circle dot"></i>`}</div>
                <div class="status"><h3>${status}</h3></div>
                <div class="attachment">${attachment ? `<i class="fa-solid fa-paperclip"></i>` : ""}</div>
                <div class="open-details"><i class="fa-solid fa-chevron-down" onclick="showMoreDetails(${index})"></i></div>
             </div>
           <div class="sectionTwo">
             <div class="firstRow">
              <div class="status onlyMobile"><h3>Státusz:</h3>${status}</div>
              <div class="idNm onlyMobile"><h3>Azonosító:</h3>${id}</div>
              <div class="method onlyMobile"><h3>Hogyan:</h3>${method}</div>

              <div class="idoszak onlyDesktop"><h3>Biztosítási időszak:</h3><div class="data">${idoszak}</div></div>
              <div class="dijeloiras onlyDesktop"><h3>Díjelőírás:</h3><div class="data">${dijelőírás}</div></div>
              <div class="konyveltdij onlyDesktop"><h3>Könyvelt Díj:</h3><div class="data">${konyveltDij}</div></div>
             </div>
             <div class="secondRow">
              <div class="csatolmany"><h3>Csatolmány</h3></div>
              <div class="iconContainer"><i class="fa-solid fa-file-pdf"></i> <a href="#">Fizetési nyugta letöltése</a><div class="onlyMobile"><i class="fa-solid fa-download"></i></div></div>
              
             </div>
             <div class="thirdRow">
              <div class="idoszak onlyMobile"><h3>Időszak:</h3><div class="data">${idoszak}</div></div>
              
              <div class="method onlyMobile"><h3>Díjelőírás:</h3>${amount}</div>
              <div class="amount onlyMobile"><h3>Könyvelt díj:</h3>${amount}</div>
             </div>
             
           </div>   
         </div>`)
  })
  document.querySelector('.successful').innerHTML = data.join("")
}
getData()

function showDetails(index) {

  if (show == false) {
    show = true
  } else {
    show = false
    getData()
  }
  const newId = details[index].id
  const getElement = document.getElementById(index)
  if (show) {
    getElement.innerHTML = `${show && `<span onclick="showDetails(${index})"><i class="fa-solid fa-angle-left"></i></span>${newId.substring(0, newId.length)}</div>`}`
  }
}
function showMoreDetails(index) {
  const getElement = document.getElementsByClassName("details-container")
  getElement[index].firstElementChild.lastElementChild.classList.toggle("rotate")
  getElement[index].lastElementChild.classList.toggle("show")
  getElement[index].classList.toggle('heightAuto')
}





