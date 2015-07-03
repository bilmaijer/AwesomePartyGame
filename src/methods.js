/**
 * Created by Spikey on 16.05.2015.
 */
var score = 0;
var win = 0;

function createTable(s) {
    var i;
    var j;
    var kasutatud = [];
    score = 0;
    win = 0;
    s.busy = false;

    // allPossibleTasks on hashMap, kus võtmeteks on kategooriad ja väärtusteks arrayList, kus on kõik võimalikud taskid.
    // SEDA HASHMAPI KASUTADA EVENTLISTENERIS, MITTE LOCAL STORAGE'T.
    var allPossibleTasks = createAll();


    //buttonite tegemise asi randomiga

    var content = [];

    for (var l = 0; l < finalThemes.length; l++) {
        content.push("res/"+finalThemes[l]);
    }
    //var cards = [];
    //for (var k = 0; k < 5; k++) {
    //    cards.push("res/card1.png");
    //    cards.push("res/card2.png");
    //    cards.push("res/card3.png");
    //}

    var map = [];

    var where;
    var which = 0;
    //score label
    s.labelCoin = new cc.LabelTTF("Score: " + score, "Helvetica", 20);
    s.labelCoin.setColor(cc.color(245, 245, 245));//black color
    s.labelCoin.setPosition(cc.p(70, cc.winSize.height - 20));
    s.addChild(s.labelCoin);

    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED && !s.busy) {
            var uus = event.name.split(" ");
            var test = uus[0].toString() + " " + uus[1].toString();
            var array = map[test];
            if (array[0].switch) {
                s.busy = true;
                openCard(array[0], s, array[0].type.slice(4), allPossibleTasks);
                if (asukoht[0] != null) {
                    kasutatud.push(asukoht[0].toString() + " " + asukoht[1].toString());
                    if (asukoht[0]>uus[0]){
                        where = "left";
                    }
                    else if (asukoht[0]<uus[0]){
                        where = "right";
                    }
                    else if (asukoht[1]>uus[1]){
                        where = "down";
                    }
                    else{
                        where = "up";
                    }
                    console.log(where);
                    asukoht = uus;
                    fullRefresh();
                }
            }
        }
    }

    //buttonite tegemise asi randomiga

    var asukoht = [2, -1];
    //var empty = new ccui.Widget();
    win = 0;
    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j;
            var x = i - 1;
            var y = j - 1;
            temp.addTouchEventListener(onMouseUp, this);
            s.addChild(temp, 201);
            temp.name = (i - 1).toString() + " " + (j - 1).toString();
            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [temp, content[randInt]];
            refresh(x, y, temp);
        }
    }

    //var hero = new cc.Sprite();
    //hero.x = cc.winSize.width / 2;
    //hero.y = cc.winSize.height / 12;
    //s.addChild(hero, 250);

    // L�hedal asuvate ruutude kontroll ja ikooni muutus

    function refresh(x, y, temp) {

        if (kasutatud.indexOf(x.toString() + " " + y.toString()) == -1) {
            if (asukoht[0] - x == 0 || asukoht[0] - x == 1 || asukoht[0] - x == -1) {
                if (asukoht[1] - y == 0 || asukoht[1] - y == 1 || asukoht[1] - y == -1) {
                    if (asukoht[1] - y != 0 && asukoht[0] - x != 0) {
                        temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                        temp.setScale(0.7, 0.7);
                        temp.switch = false;
                    }
                    else {
                        temp.loadTextures(map[temp.name][1] + ".png", map[temp.name][1] + "1.png", " ");
                        temp.type = map[temp.name][1];
                        temp.setScale(0.7, 0.7);
                        temp.switch = true;
                        win++;
                    }
                }
                else {
                    temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                    temp.setScale(0.7, 0.7);
                    temp.switch = false;
                }
            }
            else {
                temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                temp.setScale(0.7, 0.7);
                temp.switch = false;
            }
        }
        /*else {
            temp.loadTextures("res/footprintR.png", "res/footprintR.png", " ");

            temp.setScale(0.07, 0.07);
            temp.switch = false;
        }*/
        if (asukoht[0] - x == 0 && asukoht[1] - y == 0) {
            console.log(temp.x);
            if (which % 2 == 0) {
                temp.loadTextures("res/footprintR.png", "res/footprintR.png", " ");
                var a = 10;
            }
            else{
                temp.loadTextures("res/footprintL.png", "res/footprintL.png", " ");
                var a = -10;
            }

            which++;
            if (where == "right") {
                temp.attr({
                    rotation: 90,
                    y: temp.y -a
                });
            }
            else if (where == "left"){
                temp.attr({
                    rotation: 270,
                    y: temp.y + a
                });
            }
            else if (where == "down"){
                temp.attr({
                    rotation: 180,
                    x : temp.x -a
                });
            }
            else{
                temp.attr({
                    x : temp.x +a
                });
            }
            temp.setScale(0.07, 0.07);

            temp.switch = false;
        }
    }


    function fullRefresh() {
        win = 0;
        for (i = 1; i < 6; i++) {
            for (j = 1; j < 6; j++) {
                refresh(i - 1, j - 1, map[(i - 1).toString() + " " + (j - 1).toString()][0]);
            }
        }
    }

    //function createMap() {
    //    var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
    //    var map = {};
    //    var toLoop = ls.getItem("keys").split(",");
    //    for (var i = 0; i < toLoop.length; i++) {
    //        map[toLoop[i]] = ls.getItem(toLoop[i]).split(",");
    //    }
    //    return map;
    //}
    function createAll() {
        //TODO: OUR CONTENT GOES HERE
        var map = {};
        var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
        var drinking = [
            "Make up a drinking rule. e.g. Who stands up for whatever reason, must drink",
            "Pick three people to share their drinks with anyone who wishes",
            "Window watchers - Windows phone users must drink",
            "Partly mechanical - Android users must drink",
            "Apple munchers drink - Everyone who has an iPhone must drink",
            "Everyone (who's alive) drinks. Repeat as many times as you deem reasonable",
            "Waterfall - On start everyone starts drinking and you may stop when the person to your left has stopped. Gamemaster will stop drinking first",
            "Never have I ever - You say something that you have never done. Each person who has takes a sip of his drink. Repeat until each person has had his turn",
            "We will order all of it - Gamemaster chooses one category and you start naming items that belongs in that category. Game over when someone can't think of anything new",
            "Cavemen to the rescue - Every man must drink",
            "Beauty pagent - Any woman is beautiful and there for they must drink"];
        var sporty = [
            "Ready, set, go! - First one to complete the following exercises, wins. 2x jumping jacks, sit up, push up, sit up, push up and a somersault",
            "Repetition is the key - See who can do most push ups",
            "Flamingo forest - Everyone stands on one leg with no support. Lets see who can last the longest",
            "Follow the leader - The Gamemaster shows one physical exercise that the others must do. Then the others do the same in a clockwise order until everyone has had a go",
            "",
            "",
            "",
            ""];

        var brainy = [
            "Do the wordchain - Starting from the Gamemaster, everyone says a word. Words have two conditions: each word starts with the letter last one ended with and words must make full sentences",
            "Everyday Joker - Riddle the person to your right",
            "Guess my name - Gamemaster chooses 3 people from your group. Chosen people pick any person or character. The others ask yes/no questions to figure out the characters name",
            "FizzBuzz- People start incrementally counting numbers moving clockwise through the group. For every number divisible by 3, say \"Fizz\" and for every number divisible by 5 say \"Buzz\". If the are divisible by both, say \"FizzBuzz\" and turn the circle around",
            "Knigts and knaves - Knights always tell the truth, and knaves always lie.You meet two inhabitants: Peggy and Zippy. Peggy tells you that 'of Zippy and I, exactly one is a knight'. Zippy tells you that only a knave would say that Peggy is a knave. Who is a knight and who is a knave?",
            "Pass the food around - Go around the group, each one naming a food item with eggs, flour and milk/water in it. You may not repeat",
            "Gamemaster thinks of a word. The person on his right starts by saying one to three consecutive letters from the alphabet that are not part of this word. The next goes on as quick as he can",
            ""
            ];
        var tutvumis = [
            "Two truths and a lie - One by one each party member reveals two interesting facts about himself and adds one lie in the mix. The others try to guess the lie",
            "Hi how are you! - Everyone says their name. Then each person in turn tries to correctly place all names. If someone fails, start over. Game ends, when everyone has memorized all names",
            "Shorties - The person with the shortest pants/skirt asks the person with the shortest hair a personal question",
            "Guess who I am - Game master chooses a person from the game and the others have to guess who it is by asking questions from him. \"Who is it?\" in any form is not allowed",
            "Best drink i ever had - Everyone tell us about your favorite cocktail!",
            "Describe the suspect - Describe yourself with three sentences. Your name doesn't count",
            "You seem interesting - Compliment two other people who you find interesting",
            ""];
        var naughty = [
            "Strip and tease - Each person chooses whatclothing item the person across from him/her must remove in a seductive manner",
            "Touch this - Choose on person that will caress you. Person on your right dictates where you will be caressed",
            "Fantasy close to home - GameMaster chooses two people that have to reveal to everyone who from your party he/she would take home. They must describe shortly what you would do to them",
            "Clothes bazaar - Each person chooses one person from his/her desired sex that he will change one item of clothing that he/she wishes. Both of them will wear that item until the end of the game. You deside how naughty you make the game",
            "",
            "",
            "",
            ""];
        //alert("Esimene kord!");
        map["keys"] = keys;
        map["drinking"] = drinking;
        map["sporty"] = sporty;
        map["brainy"] = brainy;
        map["tutvumis"] = tutvumis;
        map["naughty"] = naughty;
        return map;
    }
}