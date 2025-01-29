document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="view_tasks"> 
                    Add Tasks
                </button>
            </div>
        `;
        var j = 0;
        function buttonClick() {
            document.getElementById('inc').value = ++j;
        }
        var current_tasks = document.querySelectorAll(".view_tasks");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                location.href="../add_tasks/addtask.html";
                /* this.parentNode.remove(); */
            }

        }
    }
}