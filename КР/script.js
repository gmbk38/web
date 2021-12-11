 
    //Для быстроты решений и оформления вытягивал части кода
    //со своей песочницы gmbk38.xyz и официальной странички kirillov.website
    //С первого тащил css, со второго - jquery

    jQuery(document).ready(function(){
 
        var mass = new Array(); // массив всех занятых клеток
        var mass_x = new Array(); // массив клеток с "х"
        var mass_o = new Array(); // массив клеток с "0"
        var v = 0; // Победил ли кто-то
        var counter = 0; // счётчик, чей сейчас ход

        jQuery(".cell").on("click", function(){
            var cell_text = jQuery(this).text();
            if(cell_text != "") 
                alert("занято");
            else {
                if (counter % 2 == 0) {
                    // Если counter чётный - ходит игрок креста
                    jQuery(this).text("x");

                    counter = counter + 1;
 
                    var id_cell = jQuery(this).attr('id');
                    id_cell = parseInt(id_cell);
     
                    mass.push(id_cell);
                    mass_x.push(id_cell);
     
                    var v = victory(mass_x, "Игрок креста");

                    // if (v == 1)
                    // victoryBegin("Игрок креста"); 

                }

                else {

                    // Иначе ходит игрок нуля

                    jQuery(this).text("0");

                    counter = counter + 1;
 
                    var id_cell = jQuery(this).attr('id');
                    id_cell = parseInt(id_cell);
     
                    mass.push(id_cell);
                    mass_o.push(id_cell);

                    var v = victory(mass_o, "Игрок нуля");

                    // if (v == 1)
                    // victoryBegin("Игрок нуля");

                }
 
                if(mass.length == 9 && v != 1)
                    noneVictory();
 
            }
        });
 
        // Проверка на победу
        function victory(metka, user){
 
            //проверяем строки со столбцами
            var srt1 = 0;
            var srt2 = 0;
            var srt3 = 0;
            var st1 = 0;
            var st2 = 0;
            var st3 = 0;
            var d1 = 0;
            var d2 = 0; 
 
 
            for (var i = 0; i < metka.length; i++){
                switch(metka[i]) {
                    case 1: { srt1++; st1++; d1++; break; }
                    case 2: { srt1++; st2++; break; }
                    case 3: { srt1++; st3++; d2++; break; }
                    case 4: { srt2++; st1++; break; }
                    case 5: { srt2++; st2++; d1++; d2++;  break; }
                    case 6: { srt2++; st3++; break; }
                    case 7: { srt3++; st1++; d2++; break; }
                    case 8: { srt3++; st2++; break; }
                    case 9: { srt3++; st3++; d1++;break; }
                }
 
                if(srt1 == 3 || srt2 == 3 || srt3 == 3)
                {
                    jQuery(".victory").text("Победил " + user);
                    jQuery(".victory").css("display", "block");
                    victoryBegin(user);
                }
                if(st1 == 3 || st2 == 3 || st3 == 3)
                {
                    jQuery(".victory").text("Победил " + user);
                    jQuery(".victory").css("display", "block");
                    victoryBegin(user);
                }
                if(d1 == 3 || d2 == 3)
                {
                    jQuery(".victory").text("Победил " + user);
                    jQuery(".victory").css("display", "block");
                    victoryBegin(user);
                }
            }
 
            if(srt1 == 3 || srt2 == 3 || srt3 == 3 || st1 == 3 || st2 == 3 || st3 == 3 || d1 == 3 || d2 == 3)
                return 1;
        }
 
        // Победа
        function victoryBegin(user){
 
            setTimeout(function(){
                jQuery(".victory").css("display", "none");
                jQuery(".cell").text("");
 
                var raund = jQuery(".statistics span").text();
                raund++;
                jQuery(".statistics span").text(raund);
 
                if(user == "Игрок нуля")
                {
                    var num = jQuery(".num_c").text();
                    num++;
                    jQuery(".num_c").text(num);
                }
                else
                {
                    var num = jQuery(".num_u").text();
                    num++;
                    jQuery(".num_u").text(num);
                }
 
                mass.length = 0;
                mass_x.length = 0;
                mass_o.length = 0;
            }, 1000);
 
        }
 
        // Ничья
        function noneVictory(){
            setTimeout(function(){
                jQuery(".victory").text("Ничья");
                jQuery(".victory").css("display", "block");
            }, 500);
 
            setTimeout(function(){
                jQuery(".victory").css("display", "none");
                jQuery(".cell").text("");
 
                var raund = jQuery(".statistics span").text();
                raund++;
                jQuery(".statistics span").text(raund);
 
                mass.length = 0;
                mass_x.length = 0;
                mass_o.length = 0;
 
            }, 1000);
        }
 
        function getRandomInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    })