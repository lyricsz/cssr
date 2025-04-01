export function pushResult(SN, MatricNum, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Exam, CA, Total, Grade, Remarks, id){
    const arr = [SN, MatricNum, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Exam, CA, Total, Grade, Remarks];
    const tr = document.createElement("tr");

    for ( var i in Array.from("iiiiiiiiiiiiiiiii")){
        const t = document.createElement("td");
        t.textContent = arr[i];
        tr.appendChild(t);
    }

    document.getElementById(id).appendChild(tr);
}