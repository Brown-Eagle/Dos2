

            function check(form){
                if (form.consolecheck.value == "demo@dos2:close eth"){
                    document.getElementById("app_show").src = "";
                    document.getElementById("console1").innerHTML = "<div align=left><font color=green>demo@dos2:eth closed...</font></div>";
                    document.getElementById("xx").value = "demo@dos2:";
                }
                else if(form.consolecheck.value == "demo@dos2:run --help"){
                    document.getElementById("app_show").src = "runhelp.html";
                    document.getElementById("console1").innerHTML = "<div align=left><font color=green>demo@dos2:run --help</font></div>";
                    document.getElementById("xx").value = "demo@dos2:";
                }
                else if(form.consolecheck.value == "demo@dos2:run -gp calc"){
                    document.getElementById("app_show").src = "eng_calc.html";
                    document.getElementById("console1").innerHTML = "<div align=left><font color=green>demo@dos2:run calc</font></div>";
                    document.getElementById("xx").value = "demo@dos2:";
                }
                else if(form.consolecheck.value == "demo@dos2:run -gp game"){
                    document.getElementById("app_show").src = "eng_game.html";
                    document.getElementById("console1").innerHTML = "<div align=left><font color=green>demo@dos2:run game0</font></div>";
                    document.getElementById("xx").value = "demo@dos2:";
                }
                else if(form.consolecheck.value == "demo@dos2:"){
                    ////////do nothing
                }
                else{
                    document.getElementById("console1").innerHTML = "<div align=left><font color=green>bad command</font></div>";
                    document.getElementById("app_show").src = "";
                    document.getElementById("xx").value = "demo@dos2:";
                }
            }
            function console(){
                var x = document.getElementById("console_enter")
                document.getElementById("console0").innerHTML = "<form><div align=left><input type=text style=\'background-color:transparent;color:green;border: 0px solid;width:89%\' id=xx name=consolecheck value=demo@dos2:><input type=button style=\'width:10%\' onclick=\'check(this.form);\' value=Start></div></form>";
            }
            function console_des(){
                document.getElementById("console0").innerHTML = "";
                document.getElementById("console1").innerHTML = "";
            }
            function app_clear(){
                document.getElementById("app_show").src = "";
            }    
            function menu_clear(){
                document.getElementById("it").innerHTML = "";
            }
            function option_clear() {
            	 document.getElementById('s0').value = 0;
            }