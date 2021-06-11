var todoArray = [];
var mainContainer = document.querySelector(".inputContainer");
var inputBar = document.querySelector("#inputBar");
var todoContent = document.querySelector("#todoContent");
var addToDo = document.querySelector("#addButton");
var deleteBtn = document.querySelector(".deleteButton");
var tableParent, tableRaw, noteCounter, toDoHeadContainer, toDoContentContainer, deleteButton;
//  Khởi tạo danh sách trống khi vào trang//
window.onload =  function(){
    tableParent = document.createElement("ul");
    tableParent.classList.add("tableContainer");
    mainContainer.appendChild(tableParent);
    tableParent.style.display = 'none';
}
// Hàm xóa kết quả trong ô input để tiếp tục nhập công việc mới//
function reset () {
    inputBar.value = "";
    todoContent.value = "";
}
//Hàm khởi tạo một dòng công việc
function createTableData () {
    // khởi tạo các thẻ HTML mới cho dòng công việc mới
    tableRaw = document.createElement("li");
    noteCounter = document.createElement("span");
    toDoHeadContainer = document.createElement("span");
    toDoContentContainer = document.createElement("span");
    deleteButton = document.createElement("span");
    // thêm các thẻ class cho các thẻ HTML tương ứng
    tableRaw.classList.add("tableRaw");
    noteCounter.classList.add("toDoNumber");
    toDoHeadContainer.classList.add("toDoHeading");
    toDoContentContainer.classList.add("toDoContentContainer");
    deleteButton.classList.add("deleteButton");
    //Thêm nội dung cho thẻ xóa là hình một cái thùng rác
    deleteButton.innerHTML = `<i class="far fa-trash-alt"></i>`
}
// Hàm in danh sách công việc ra màn hình
function printArray () {
    // Xóa hết danh sách công việc trên màn hình
    tableParent.innerHTML = "";
    // sử dụng filter lọc ra các công việc khác công việc thứ i . Sau đó in chúng ra màn hình
    function removeElement(i) {
        todoArray = todoArray.filter(( _, z )=> z!=i);
        printArray();
    }
    //khởi tạo và thêm nội dung cho từng công việc
    todoArray.map((value,i)=>{
        createTableData ();        
        //Phần thêm nội dung        
        noteCounter.textContent = i + 1;
        toDoHeadContainer.innerText = value.heading;
        toDoContentContainer.innerText = value.content;                
        tableRaw.appendChild(noteCounter);
        tableRaw.appendChild(toDoHeadContainer);
        tableRaw.appendChild(toDoContentContainer);
        tableRaw.appendChild(deleteButton);                   
        deleteButton.addEventListener("click", () => removeElement(i))
        //Hiển thị công việc ở cuối danh sách ul.tableContainer
        tableParent.appendChild(tableRaw);
    })
}
//Hàm kiểm tra dữ liệu nhập ở input
function checkValue() {
    if (inputBar.value !== "" && todoContent.value !== "") {
        // Đẩy giá trị mới vào dãy sau đó in dãy công việc ra màn hình
        let tempObj = {};                
        tempObj.heading = inputBar.value;
        tempObj.content = todoContent.value;
        todoArray[todoArray.length]=tempObj;
        printArray();
        tableParent.style.display = "block";

    } else { 
        //Thông báo cho người dùng về việc nhập thiếu dữ liệu
        alert("Please, Enter your toDo Heading and Content"); 
    }
    reset()
}