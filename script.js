const costBody = document.querySelector('#resourceCostBody');
const gainBody = document.querySelector('#resourceGainBody');
const test = document.createElement('div');
test.placeholder
function createElement(type,content,clas,idtype,labelfor,inputType,inputName,inputPlaceholder)
{
    const newElement = document.createElement(type);
    
    if(content != 'n')
    {
        newElement.innerHTML = content;
    }
    if(clas != 'n')
    {
        newElement.classList.add(clas);
    }
    if(labelfor != 'n')
    {
        newElement.htmlFor = labelfor;
    }
    if(idtype != 'n')
    {
        newElement.id = idtype;
    }
    if(inputPlaceholder != 'n')
    {
        newElement.placeholder = inputPlaceholder;
    }
    if(inputType != 'n')
    {
        newElement.setAttribute("type", inputType);
    }
    if(inputName != 'n')
    {
        newElement.name = inputName;
    }
    return newElement;

}

function createCostTab(name)
{
   const costBox = createElement('div','n',"resource"+name+"Box");
   const labelCostName = createElement('label','n','n','n',name+'Name','n','n','n')
   const inputCostName = createElement('input','n','n',name+'Name','n','text', name+'_Name','name...')
   const labelResourceCost = createElement('label','n','n','n','resource'+name,'n','n','n')
   const inputResourceCost = createElement('input','n','n','resource'+name,'n','text','resource_'+name,'19...')
   labelCostName.appendChild(inputCostName)
   labelResourceCost.appendChild(inputResourceCost)
   costBox.appendChild(labelCostName)
   costBox.appendChild(labelResourceCost)
   return costBox

}
document.querySelector(".addCostResourceBox").addEventListener("click",function(){costBody.appendChild(createCostTab('Cost'))})
document.querySelector(".addGainResourceBox").addEventListener("click",function(){gainBody.appendChild(createCostTab('Gain'))})
document.querySelector(".deleteGainResourceBox").addEventListener("click",function(){gainBody.removeChild(gainBody.lastChild)})
document.querySelector(".deleteCostResourceBox").addEventListener("click",function(){costBody.removeChild(costBody.lastChild)})