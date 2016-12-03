javascript:(function(){
rows = document.querySelectorAll("div.scrollable>table.normal-table>tbody>tr");
first_scores = [];
first_cols = rows[0].getElementsByClassName("score");
for(col of first_cols){
    first_scores.push(Number(col.innerText.replace(",", "")));
}
for(row of rows){
    cols = row.getElementsByClassName("score");

    if(cols.length==0){
        continue;
    }
    for(i = 0;i<7;i++){
        score = cols[i].innerText.replace(",", "");
        diff = Number(score)-first_scores[i];
        diff_str = String(diff);
        if(diff >= 0){
            diff_str = "+"+diff;
        }
        cols[i].innerHTML =
          cols[i].innerText+'<br>(<span style="color:red">'+diff_str+'</span>)';
    }
}
})()
