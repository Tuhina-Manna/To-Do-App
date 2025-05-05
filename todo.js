let records = [];
const createForm = document.getElementById('createForm');
const recordList = document.getElementById('recordList');
const updateModal = new bootstrap.Modal(document.getElementById('updateModal'));
const updateName = document.getElementById('updateName');
const updateDesc = document.getElementById('updateDesc');
const updateRecordBtn = document.getElementById('updateRecordBtn');
let editIndex = -1;
// Create Record
createForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const desc = document.getElementById('desc').value;
    if (name && desc) {
        const newRecord = { name, desc };
        records.push(newRecord);
        displayRecords();
        createForm.reset();
    }
});
// Display Task
function displayRecords() {
    recordList.innerHTML = '';
    records.forEach((record, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${record.name}</td>
            <td>${record.desc}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editRecord(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Delete</button>
            </td>`;
        recordList.appendChild(tr);
    });
}
// Update Record
updateRecordBtn.addEventListener('click', function () {
    const name = updateName.value;
    const desc = updateDesc.value;
    if (name && desc) {
        records[editIndex] = { name, desc };
        displayRecords();
        updateModal.hide();
    }
});
//Edit task
function editRecord(index) {
    editIndex = index;
    const record = records[index];
    updateName.value = record.name;
    updateDesc.value = record.desc;
    updateModal.show();
}
// Delete Record
function deleteRecord(index) {
    records.splice(index, 1);
    displayRecords();
}