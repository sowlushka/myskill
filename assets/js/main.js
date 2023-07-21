"use strict";

const url="assets/data/dom-methods.txt";
fetch(url)
.then((response)=>response.text())
.then((text)=>{
    //Парсим текст, заполняем таблицу
    text=text.replaceAll("\r\n","\n");//Приводим перенос строки к виду linux
    text=text.split("\n\n");
    let tbodyHTML="";
    text.forEach(element => {
        let trowData=element.trim().split("\n");
        tbodyHTML+=`
                    <tr>
                        <td>
                            ${trowData[0]}
                        </td>
                        <td>
                            ${trowData[1]}
                        </td>
                        <td>
                            ${trowData[2]}
                        </td>
                    </tr>
        `;
    });
    let tbody=document.getElementById('meth-list');
    tbody.insertAdjacentHTML("afterbegin",tbodyHTML);
});