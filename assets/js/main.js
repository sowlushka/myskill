"use strict";

const url="assets/data/dom-methods.txt";
fetch(url)
.then((response)=>response.text())
.then((text)=>{
    //Парсим текст, заполняем таблицу
    text=text.replaceAll("\r\n","\n");//Приводим перенос строки к виду linux
    text=text.split("\n\n");
    let tbodyHTML="";
    let smallScreenHTML="";
    text.forEach(element => {
        let trowData=element.trim().split("\n");
        if(trowData.length==3){
            tbodyHTML+=`
                        <tr>
                            <td class="td-method">
                                ${trowData[0]}
                            </td>
                            <td class="td-descript">
                                ${trowData[1]}
                            </td>
                            <td class="td-example">
                                ${trowData[2]}
                            </td>
                        </tr>
            `;

            smallScreenHTML+=`
                        <div class="meth-block_row">
                            <div class="td-method">
                                ${trowData[0]}
                            </div>
                            <div class="td-descript">
                                ${trowData[1]}
                            </div>
                            <div class="td-example">
                                ${trowData[2]}
                            </div>
                        </div>
            `;
        }
    });
    document.getElementById('meth-list').insertAdjacentHTML("afterbegin",tbodyHTML);
    document.getElementById('meth-block-list').insertAdjacentHTML("afterbegin",smallScreenHTML)
});