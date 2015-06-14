var res = {
    robota: {type: "font", name: "Robota", srcs: ["res/RobotoSlab-Regular.ttf"]},
    s_menu: "res/music.mp3"
    //s_shuffle: "res/shuffle.mp3",
    //s_flip: "res/flip.mp3"
};

var g_resources = [];

for (var i in res) {
    g_resources.push(res[i]);
}