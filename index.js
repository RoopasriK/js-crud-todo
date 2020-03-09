let arr=[];
const name=document.getElementById('name');
const email=document.getElementById('email');
const addbutton=document.getElementById('cu-action');
document.getElementById('cu-action').addEventListener('click',insert);
let currentID=null;
var i=0;
        //add data from table
        function insert(){
            if(currentID){
                arr=arr.map((ak)=>{
                    if(currentID==ak.currentID){
                    ak.name=name.value;
                    ak.email=email.value;
                }
                return ak;
            });
                update(null,'add');
        }
            else{
                const obj={};
                obj.currentID=++i;
                obj.name=name.value;
                obj.email=email.value;
                arr.push(obj);
            }
            display();
        }
        //reset input boxes
        function reset(){
            name.value="";
            email.value="";
        }
        //update exisiting values
        function update(no,text){
            currentID=no;
            addbutton.innerHTML=text;
        }
        //edit to make changes
        function edit(objectno){
            const a = arr.find(index=>index.currentID==objectno);
            name.value=a.name;
            email.value=a.email;
            update(a.currentID,'update');
        }
        //delete data from table
       function del(objectno){
        arr=arr.filter(arr=>arr.currentID!==objectno);
        display();
        reset();
        }
        //display data in table
        function display(){
            rows='';
            arr.forEach((obj)=>{
                const tr = `<tr>
                <td>${obj.currentID}</td>
                <td>${obj.name}</td>
                <td>${obj.email}</td>
                <td><button type="button" class="btn btn-primary" onclick="edit(${(obj.currentID)})">Edit</button></td>
                <td><button type="button" class="btn btn-primary" onclick="del(${(obj.currentID)})">Delete</button></td>
                </tr>`
            rows+=tr;
        });
        document.getElementById("todo-body").innerHTML=rows;
        reset();
     }
    
     //Another Method -- does not allow duplicates and null values into table
/*
function store(){
    let ins={};
    let flag=1;
    arr.forEach(element=>{
        if(element.b==name.value && element.c==email.value)
        {
            flag=0;
        }
    });
    if(flag==1)
    {
        ins.a=i;
        ins.b=name.value;
        ins.c=email.value;
        arr.push(ins);
        display();
    }
        update(null,'add');
        let rows='';
        arr.forEach(obj=>{
            const tr = `<tr>
            <td>${obj.a}</td>
            <td>${obj.b}</td>
            <td>${obj.c}</td>
            <td><button type="button" class="btn btn-primary" onclick="edit(${(obj.a)})">Edit</button></td>
            <td><button type="button" class="btn btn-primary" onclick="del(${(i)})">Delete</button></td>
            </tr>`
            rows+=tr;
            i++;
        })
        document.getElementById("todo-body").innerHTML=rows;
        reset();
    }
   */