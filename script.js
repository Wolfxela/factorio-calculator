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
   const labelCostOutput = createElement('label','n','n','n','resource"+name+"Output','n','n','n')
   const inputCostOutput = createElement('input','n','n','resource'+name+'Output','n','text',"resource_"+name+"_OutPut",'')
   labelCostOutput.appendChild(inputCostOutput)
   labelCostName.appendChild(inputCostName)
   labelResourceCost.appendChild(inputResourceCost)
   costBox.appendChild(labelCostName)
   costBox.appendChild(labelResourceCost)
   costBox.appendChild(labelCostOutput)
   return costBox

}
document.querySelector(".addCostResourceBox").addEventListener("click",function(){costBody.appendChild(createCostTab('Cost'))})
document.querySelector(".addGainResourceBox").addEventListener("click",function(){gainBody.appendChild(createCostTab('Gain'))})
document.querySelector(".deleteGainResourceBox").addEventListener("click",function(){gainBody.removeChild(gainBody.lastChild)})
document.querySelector(".deleteCostResourceBox").addEventListener("click",function(){costBody.removeChild(costBody.lastChild)})
document.querySelector(".calculate").addEventListener("click", function(){calculate(Array.from(document.getElementsByName('resource_Cost')),Array.from(document.getElementsByName('resource_Gain')),document.getElementById('craftingSpeed').value,document.getElementById('craftTime').value,document.getElementById('ammountOfMachines').value)})
//use the arrays to get both the materials and cost boxes, 2 arrays
//get all the machine numbers, time, crafting speed
//find a way to get it to 1s crafting time, or close enough
//upon pressing button, it will go trough the arrays, then one by one with a for loop they will first get divided by time untill it's 1s, then multiplied by the crafting multiplier
//then multiplied by the total machines



//craft time of 2s
function calculate(costArray,gainArray,craftSpeed,craftTime,machineAmmount)
{
    costOutputArray = Array.from(document.getElementsByName('resource_Cost_OutPut'))
    gainOutputArray = Array.from(document.getElementsByName('resource_Gain_OutPut'))
    console.log("hawo")
    var tempDivider;
    
    if(craftTime != 1)
    {
        tempDivider = 1/craftTime;
    }
    else
    {
        tempDivider = 1;
    }
    for(let i = 0; i<costArray.length; i++)
    {
        console.log(costArray[i].value)
        var numberStorage = costArray[i].value;
        numberStorage *= tempDivider;
        numberStorage *= craftSpeed;
        numberStorage *= machineAmmount;
        costOutputArray[i].value = numberStorage;
        
    }
    for(let i = 0; i<gainArray.length; i++)
    {
        console.log(gainArray[i].value)
        var numberStorage = gainArray[i].value;
        numberStorage *= tempDivider;
        numberStorage *= craftSpeed;
        numberStorage *= machineAmmount;
        gainOutputArray[i].value = numberStorage;
        
    }
}