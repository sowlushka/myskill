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
        if(trowData.length>2){
            let indxShift=0;//Сдвиг в индексе массива, когда комментария к группе методов нет
            let methodGroupName="";
            let methodGroupNameInBlock="";
            if(trowData[0].indexOf("/*")>=0 && trowData[0].indexOf("*/")>0){
            /*Имеется комментарий к группе методов */
                indxShift=1;//Сдвиг в индексе массива когда имеется комментарий
                methodGroupName=trowData[0].replace("/*","").replace("*/","").trim();
                methodGroupName=`
                        <tr>
                            <td colspan="3" class="td-methods-group-name">${methodGroupName}</td>
                        </tr>
                `;
                methodGroupNameInBlock=`
                        <div class="block-methods-group-name">${methodGroupName}</div>
                `;
            }
            tbodyHTML+=`
                        ${methodGroupName}
                        <tr>
                            <td class="td-method">
                                ${trowData[indxShift+0]}
                            </td>
                            <td class="td-descript">
                                ${trowData[indxShift+1]}
                            </td>
                            <td class="td-example">
                                ${trowData[indxShift+2]}
                            </td>
                        </tr>
            `;

            smallScreenHTML+=`
                        ${methodGroupNameInBlock}
                        <div class="meth-block_row">
                            <div class="td-method">
                                ${trowData[indxShift+0]}
                            </div>
                            <div class="td-descript">
                                ${trowData[indxShift+1]}
                            </div>
                            <div class="td-example">
                                ${trowData[indxShift+2]}
                            </div>
                        </div>
            `;
        }
    });
    document.getElementById('meth-list').insertAdjacentHTML("afterbegin",tbodyHTML);
    document.getElementById('meth-block-list').insertAdjacentHTML("afterbegin",smallScreenHTML)
});