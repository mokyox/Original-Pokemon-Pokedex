const pokemonJson = [
  {
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    }
  },
  {
    "id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    }
  },
  {
    "id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65
    }
  },
  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80
    }
  },
  {
    "id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100
    }
  },
  {
    "id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      "Speed": 43
    }
  },
  {
    "id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 58
    }
  },
  {
    "id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 78
    }
  },
  {
    "id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 45
    }
  },
  {
    "id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 30
    }
  },
  {
    "id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 70
    }
  },
  {
    "id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 50
    }
  },
  {
    "id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 35
    }
  },
  {
    "id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      "Speed": 75
    }
  },
  {
    "id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 56
    }
  },
  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 71
    }
  },
  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 101
    }
  },
  {
    "id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 72
    }
  },
  {
    "id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 97
    }
  },
  {
    "id": 21,
    "name": {
      "english": "Spearow",
      "japanese": "オニスズメ",
      "chinese": "烈雀"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 60,
      "Defense": 30,
      "Sp. Attack": 31,
      "Sp. Defense": 31,
      "Speed": 70
    }
  },
  {
    "id": 22,
    "name": {
      "english": "Fearow",
      "japanese": "オニドリル",
      "chinese": "大嘴雀"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 65,
      "Sp. Attack": 61,
      "Sp. Defense": 61,
      "Speed": 100
    }
  },
  {
    "id": 23,
    "name": {
      "english": "Ekans",
      "japanese": "アーボ",
      "chinese": "阿柏蛇"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 35,
      "Attack": 60,
      "Defense": 44,
      "Sp. Attack": 40,
      "Sp. Defense": 54,
      "Speed": 55
    }
  },
  {
    "id": 24,
    "name": {
      "english": "Arbok",
      "japanese": "アーボック",
      "chinese": "阿柏怪"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 69,
      "Sp. Attack": 65,
      "Sp. Defense": 79,
      "Speed": 80
    }
  },
  {
    "id": 25,
    "name": {
      "english": "Pikachu",
      "japanese": "ピカチュウ",
      "chinese": "皮卡丘"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 35,
      "Attack": 55,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 90
    }
  },
  {
    "id": 26,
    "name": {
      "english": "Raichu",
      "japanese": "ライチュウ",
      "chinese": "雷丘"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 90,
      "Defense": 55,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 110
    }
  },
  {
    "id": 27,
    "name": {
      "english": "Sandshrew",
      "japanese": "サンド",
      "chinese": "穿山鼠"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 20,
      "Sp. Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 28,
    "name": {
      "english": "Sandslash",
      "japanese": "サンドパン",
      "chinese": "穿山王"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 110,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 65
    }
  },
  {
    "id": 29,
    "name": {
      "english": "Nidoran♀",
      "japanese": "ニドラン♀",
      "chinese": "尼多兰"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 55,
      "Attack": 47,
      "Defense": 52,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 41
    }
  },
  {
    "id": 30,
    "name": {
      "english": "Nidorina",
      "japanese": "ニドリーナ",
      "chinese": "尼多娜"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 62,
      "Defense": 67,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 56
    }
  },
  {
    "id": 31,
    "name": {
      "english": "Nidoqueen",
      "japanese": "ニドクイン",
      "chinese": "尼多后"
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 90,
      "Attack": 92,
      "Defense": 87,
      "Sp. Attack": 75,
      "Sp. Defense": 85,
      "Speed": 76
    }
  },
  {
    "id": 32,
    "name": {
      "english": "Nidoran♂",
      "japanese": "ニドラン♂",
      "chinese": "尼多朗"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 46,
      "Attack": 57,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 50
    }
  },
  {
    "id": 33,
    "name": {
      "english": "Nidorino",
      "japanese": "ニドリーノ",
      "chinese": "尼多力诺"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 61,
      "Attack": 72,
      "Defense": 57,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 65
    }
  },
  {
    "id": 34,
    "name": {
      "english": "Nidoking",
      "japanese": "ニドキング",
      "chinese": "尼多王"
    },
    "type": [
      "Poison",
      "Ground"
    ],
    "base": {
      "HP": 81,
      "Attack": 102,
      "Defense": 77,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 85
    }
  },
  {
    "id": 35,
    "name": {
      "english": "Clefairy",
      "japanese": "ピッピ",
      "chinese": "皮皮"
    },
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 70,
      "Attack": 45,
      "Defense": 48,
      "Sp. Attack": 60,
      "Sp. Defense": 65,
      "Speed": 35
    }
  },
  {
    "id": 36,
    "name": {
      "english": "Clefable",
      "japanese": "ピクシー",
      "chinese": "皮可西"
    },
    "type": [
      "Fairy"
    ],
    "base": {
      "HP": 95,
      "Attack": 70,
      "Defense": 73,
      "Sp. Attack": 95,
      "Sp. Defense": 90,
      "Speed": 60
    }
  },
  {
    "id": 37,
    "name": {
      "english": "Vulpix",
      "japanese": "ロコン",
      "chinese": "六尾"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 38,
      "Attack": 41,
      "Defense": 40,
      "Sp. Attack": 50,
      "Sp. Defense": 65,
      "Speed": 65
    }
  },
  {
    "id": 38,
    "name": {
      "english": "Ninetales",
      "japanese": "キュウコン",
      "chinese": "九尾"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 73,
      "Attack": 76,
      "Defense": 75,
      "Sp. Attack": 81,
      "Sp. Defense": 100,
      "Speed": 100
    }
  },
  {
    "id": 39,
    "name": {
      "english": "Jigglypuff",
      "japanese": "プリン",
      "chinese": "胖丁"
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 115,
      "Attack": 45,
      "Defense": 20,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      "Speed": 20
    }
  },
  {
    "id": 40,
    "name": {
      "english": "Wigglytuff",
      "japanese": "プクリン",
      "chinese": "胖可丁"
    },
    "type": [
      "Normal",
      "Fairy"
    ],
    "base": {
      "HP": 140,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 85,
      "Sp. Defense": 50,
      "Speed": 45
    }
  },
  {
    "id": 41,
    "name": {
      "english": "Zubat",
      "japanese": "ズバット",
      "chinese": "超音蝠"
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 30,
      "Sp. Defense": 40,
      "Speed": 55
    }
  },
  {
    "id": 42,
    "name": {
      "english": "Golbat",
      "japanese": "ゴルバット",
      "chinese": "大嘴蝠"
    },
    "type": [
      "Poison",
      "Flying"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 70,
      "Sp. Attack": 65,
      "Sp. Defense": 75,
      "Speed": 90
    }
  },
  {
    "id": 43,
    "name": {
      "english": "Oddish",
      "japanese": "ナゾノクサ",
      "chinese": "走路草"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 55,
      "Sp. Attack": 75,
      "Sp. Defense": 65,
      "Speed": 30
    }
  },
  {
    "id": 44,
    "name": {
      "english": "Gloom",
      "japanese": "クサイハナ",
      "chinese": "臭臭花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 40
    }
  },
  {
    "id": 45,
    "name": {
      "english": "Vileplume",
      "japanese": "ラフレシア",
      "chinese": "霸王花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 75,
      "Attack": 80,
      "Defense": 85,
      "Sp. Attack": 110,
      "Sp. Defense": 90,
      "Speed": 50
    }
  },
  {
    "id": 46,
    "name": {
      "english": "Paras",
      "japanese": "パラス",
      "chinese": "派拉斯"
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 35,
      "Attack": 70,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 55,
      "Speed": 25
    }
  },
  {
    "id": 47,
    "name": {
      "english": "Parasect",
      "japanese": "パラセクト",
      "chinese": "派拉斯特"
    },
    "type": [
      "Bug",
      "Grass"
    ],
    "base": {
      "HP": 60,
      "Attack": 95,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 80,
      "Speed": 30
    }
  },
  {
    "id": 48,
    "name": {
      "english": "Venonat",
      "japanese": "コンパン",
      "chinese": "毛球"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 55,
      "Speed": 45
    }
  },
  {
    "id": 49,
    "name": {
      "english": "Venomoth",
      "japanese": "モルフォン",
      "chinese": "摩鲁蛾"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "base": {
      "HP": 70,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 90,
      "Sp. Defense": 75,
      "Speed": 90
    }
  },
  {
    "id": 50,
    "name": {
      "english": "Diglett",
      "japanese": "ディグダ",
      "chinese": "地鼠"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 10,
      "Attack": 55,
      "Defense": 25,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 95
    }
  },
  {
    "id": 51,
    "name": {
      "english": "Dugtrio",
      "japanese": "ダグトリオ",
      "chinese": "三地鼠"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 100,
      "Defense": 50,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 120
    }
  },
  {
    "id": 52,
    "name": {
      "english": "Meowth",
      "japanese": "ニャース",
      "chinese": "喵喵"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 35,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 90
    }
  },
  {
    "id": 53,
    "name": {
      "english": "Persian",
      "japanese": "ペルシアン",
      "chinese": "猫老大"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 70,
      "Defense": 60,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 115
    }
  },
  {
    "id": 54,
    "name": {
      "english": "Psyduck",
      "japanese": "コダック",
      "chinese": "可达鸭"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 50,
      "Attack": 52,
      "Defense": 48,
      "Sp. Attack": 65,
      "Sp. Defense": 50,
      "Speed": 55
    }
  },
  {
    "id": 55,
    "name": {
      "english": "Golduck",
      "japanese": "ゴルダック",
      "chinese": "哥达鸭"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 78,
      "Sp. Attack": 95,
      "Sp. Defense": 80,
      "Speed": 85
    }
  },
  {
    "id": 56,
    "name": {
      "english": "Mankey",
      "japanese": "マンキー",
      "chinese": "猴怪"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 35,
      "Sp. Attack": 35,
      "Sp. Defense": 45,
      "Speed": 70
    }
  },
  {
    "id": 57,
    "name": {
      "english": "Primeape",
      "japanese": "オコリザル",
      "chinese": "火暴猴"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 65,
      "Attack": 105,
      "Defense": 60,
      "Sp. Attack": 60,
      "Sp. Defense": 70,
      "Speed": 95
    }
  },
  {
    "id": 58,
    "name": {
      "english": "Growlithe",
      "japanese": "ガーディ",
      "chinese": "卡蒂狗"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 55,
      "Attack": 70,
      "Defense": 45,
      "Sp. Attack": 70,
      "Sp. Defense": 50,
      "Speed": 60
    }
  },
  {
    "id": 59,
    "name": {
      "english": "Arcanine",
      "japanese": "ウインディ",
      "chinese": "风速狗"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 90,
      "Attack": 110,
      "Defense": 80,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 95
    }
  },
  {
    "id": 60,
    "name": {
      "english": "Poliwag",
      "japanese": "ニョロモ",
      "chinese": "蚊香蝌蚪"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 40,
      "Attack": 50,
      "Defense": 40,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 90
    }
  },
  {
    "id": 61,
    "name": {
      "english": "Poliwhirl",
      "japanese": "ニョロゾ",
      "chinese": "蚊香君"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 90
    }
  },
  {
    "id": 62,
    "name": {
      "english": "Poliwrath",
      "japanese": "ニョロボン",
      "chinese": "蚊香泳士"
    },
    "type": [
      "Water",
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 95,
      "Defense": 95,
      "Sp. Attack": 70,
      "Sp. Defense": 90,
      "Speed": 70
    }
  },
  {
    "id": 63,
    "name": {
      "english": "Abra",
      "japanese": "ケーシィ",
      "chinese": "凯西"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 25,
      "Attack": 20,
      "Defense": 15,
      "Sp. Attack": 105,
      "Sp. Defense": 55,
      "Speed": 90
    }
  },
  {
    "id": 64,
    "name": {
      "english": "Kadabra",
      "japanese": "ユンゲラー",
      "chinese": "勇基拉"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      "Speed": 105
    }
  },
  {
    "id": 65,
    "name": {
      "english": "Alakazam",
      "japanese": "フーディン",
      "chinese": "胡地"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 55,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 135,
      "Sp. Defense": 95,
      "Speed": 120
    }
  },
  {
    "id": 66,
    "name": {
      "english": "Machop",
      "japanese": "ワンリキー",
      "chinese": "腕力"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 70,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 35
    }
  },
  {
    "id": 67,
    "name": {
      "english": "Machoke",
      "japanese": "ゴーリキー",
      "chinese": "豪力"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 80,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 50,
      "Sp. Defense": 60,
      "Speed": 45
    }
  },
  {
    "id": 68,
    "name": {
      "english": "Machamp",
      "japanese": "カイリキー",
      "chinese": "怪力"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 90,
      "Attack": 130,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 85,
      "Speed": 55
    }
  },
  {
    "id": 69,
    "name": {
      "english": "Bellsprout",
      "japanese": "マダツボミ",
      "chinese": "喇叭芽"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 50,
      "Attack": 75,
      "Defense": 35,
      "Sp. Attack": 70,
      "Sp. Defense": 30,
      "Speed": 40
    }
  },
  {
    "id": 70,
    "name": {
      "english": "Weepinbell",
      "japanese": "ウツドン",
      "chinese": "口呆花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 50,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      "Speed": 55
    }
  },
  {
    "id": 71,
    "name": {
      "english": "Victreebel",
      "japanese": "ウツボット",
      "chinese": "大食花"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 72,
    "name": {
      "english": "Tentacool",
      "japanese": "メノクラゲ",
      "chinese": "玛瑙水母"
    },
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 40,
      "Defense": 35,
      "Sp. Attack": 50,
      "Sp. Defense": 100,
      "Speed": 70
    }
  },
  {
    "id": 73,
    "name": {
      "english": "Tentacruel",
      "japanese": "ドククラゲ",
      "chinese": "毒刺水母"
    },
    "type": [
      "Water",
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 70,
      "Defense": 65,
      "Sp. Attack": 80,
      "Sp. Defense": 120,
      "Speed": 100
    }
  },
  {
    "id": 74,
    "name": {
      "english": "Geodude",
      "japanese": "イシツブテ",
      "chinese": "小拳石"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 40,
      "Attack": 80,
      "Defense": 100,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 20
    }
  },
  {
    "id": 75,
    "name": {
      "english": "Graveler",
      "japanese": "ゴローン",
      "chinese": "隆隆石"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 55,
      "Attack": 95,
      "Defense": 115,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 35
    }
  },
  {
    "id": 76,
    "name": {
      "english": "Golem",
      "japanese": "ゴローニャ",
      "chinese": "隆隆岩"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 80,
      "Attack": 120,
      "Defense": 130,
      "Sp. Attack": 55,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 77,
    "name": {
      "english": "Ponyta",
      "japanese": "ポニータ",
      "chinese": "小火马"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 50,
      "Attack": 85,
      "Defense": 55,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 90
    }
  },
  {
    "id": 78,
    "name": {
      "english": "Rapidash",
      "japanese": "ギャロップ",
      "chinese": "烈焰马"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 100,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 105
    }
  },
  {
    "id": 79,
    "name": {
      "english": "Slowpoke",
      "japanese": "ヤドン",
      "chinese": "呆呆兽"
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 90,
      "Attack": 65,
      "Defense": 65,
      "Sp. Attack": 40,
      "Sp. Defense": 40,
      "Speed": 15
    }
  },
  {
    "id": 80,
    "name": {
      "english": "Slowbro",
      "japanese": "ヤドラン",
      "chinese": "呆壳兽"
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 75,
      "Defense": 110,
      "Sp. Attack": 100,
      "Sp. Defense": 80,
      "Speed": 30
    }
  },
  {
    "id": 81,
    "name": {
      "english": "Magnemite",
      "japanese": "コイル",
      "chinese": "小磁怪"
    },
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 25,
      "Attack": 35,
      "Defense": 70,
      "Sp. Attack": 95,
      "Sp. Defense": 55,
      "Speed": 45
    }
  },
  {
    "id": 82,
    "name": {
      "english": "Magneton",
      "japanese": "レアコイル",
      "chinese": "三合一磁怪"
    },
    "type": [
      "Electric",
      "Steel"
    ],
    "base": {
      "HP": 50,
      "Attack": 60,
      "Defense": 95,
      "Sp. Attack": 120,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 83,
    "name": {
      "english": "Farfetch'd",
      "japanese": "カモネギ",
      "chinese": "大葱鸭"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 52,
      "Attack": 90,
      "Defense": 55,
      "Sp. Attack": 58,
      "Sp. Defense": 62,
      "Speed": 60
    }
  },
  {
    "id": 84,
    "name": {
      "english": "Doduo",
      "japanese": "ドードー",
      "chinese": "嘟嘟"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 35,
      "Attack": 85,
      "Defense": 45,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 75
    }
  },
  {
    "id": 85,
    "name": {
      "english": "Dodrio",
      "japanese": "ドードリオ",
      "chinese": "嘟嘟利"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "base": {
      "HP": 60,
      "Attack": 110,
      "Defense": 70,
      "Sp. Attack": 60,
      "Sp. Defense": 60,
      "Speed": 110
    }
  },
  {
    "id": 86,
    "name": {
      "english": "Seel",
      "japanese": "パウワウ",
      "chinese": "小海狮"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 65,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 45,
      "Sp. Defense": 70,
      "Speed": 45
    }
  },
  {
    "id": 87,
    "name": {
      "english": "Dewgong",
      "japanese": "ジュゴン",
      "chinese": "白海狮"
    },
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 90,
      "Attack": 70,
      "Defense": 80,
      "Sp. Attack": 70,
      "Sp. Defense": 95,
      "Speed": 70
    }
  },
  {
    "id": 88,
    "name": {
      "english": "Grimer",
      "japanese": "ベトベター",
      "chinese": "臭泥"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 80,
      "Attack": 80,
      "Defense": 50,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 25
    }
  },
  {
    "id": 89,
    "name": {
      "english": "Muk",
      "japanese": "ベトベトン",
      "chinese": "臭臭泥"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 105,
      "Attack": 105,
      "Defense": 75,
      "Sp. Attack": 65,
      "Sp. Defense": 100,
      "Speed": 50
    }
  },
  {
    "id": 90,
    "name": {
      "english": "Shellder",
      "japanese": "シェルダー",
      "chinese": "大舌贝"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 65,
      "Defense": 100,
      "Sp. Attack": 45,
      "Sp. Defense": 25,
      "Speed": 40
    }
  },
  {
    "id": 91,
    "name": {
      "english": "Cloyster",
      "japanese": "パルシェン",
      "chinese": "刺甲贝"
    },
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 50,
      "Attack": 95,
      "Defense": 180,
      "Sp. Attack": 85,
      "Sp. Defense": 45,
      "Speed": 70
    }
  },
  {
    "id": 92,
    "name": {
      "english": "Gastly",
      "japanese": "ゴース",
      "chinese": "鬼斯"
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 30,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 100,
      "Sp. Defense": 35,
      "Speed": 80
    }
  },
  {
    "id": 93,
    "name": {
      "english": "Haunter",
      "japanese": "ゴースト",
      "chinese": "鬼斯通"
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 50,
      "Defense": 45,
      "Sp. Attack": 115,
      "Sp. Defense": 55,
      "Speed": 95
    }
  },
  {
    "id": 94,
    "name": {
      "english": "Gengar",
      "japanese": "ゲンガー",
      "chinese": "耿鬼"
    },
    "type": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "HP": 60,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 130,
      "Sp. Defense": 75,
      "Speed": 110
    }
  },
  {
    "id": 95,
    "name": {
      "english": "Onix",
      "japanese": "イワーク",
      "chinese": "大岩蛇"
    },
    "type": [
      "Rock",
      "Ground"
    ],
    "base": {
      "HP": 35,
      "Attack": 45,
      "Defense": 160,
      "Sp. Attack": 30,
      "Sp. Defense": 45,
      "Speed": 70
    }
  },
  {
    "id": 96,
    "name": {
      "english": "Drowzee",
      "japanese": "スリープ",
      "chinese": "催眠貘"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 48,
      "Defense": 45,
      "Sp. Attack": 43,
      "Sp. Defense": 90,
      "Speed": 42
    }
  },
  {
    "id": 97,
    "name": {
      "english": "Hypno",
      "japanese": "スリーパー",
      "chinese": "引梦貘人"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 85,
      "Attack": 73,
      "Defense": 70,
      "Sp. Attack": 73,
      "Sp. Defense": 115,
      "Speed": 67
    }
  },
  {
    "id": 98,
    "name": {
      "english": "Krabby",
      "japanese": "クラブ",
      "chinese": "大钳蟹"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 105,
      "Defense": 90,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 50
    }
  },
  {
    "id": 99,
    "name": {
      "english": "Kingler",
      "japanese": "キングラー",
      "chinese": "巨钳蟹"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 130,
      "Defense": 115,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 75
    }
  },
  {
    "id": 100,
    "name": {
      "english": "Voltorb",
      "japanese": "ビリリダマ",
      "chinese": "霹雳电球"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 40,
      "Attack": 30,
      "Defense": 50,
      "Sp. Attack": 55,
      "Sp. Defense": 55,
      "Speed": 100
    }
  },
  {
    "id": 101,
    "name": {
      "english": "Electrode",
      "japanese": "マルマイン",
      "chinese": "顽皮雷弹"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 60,
      "Attack": 50,
      "Defense": 70,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 150
    }
  },
  {
    "id": 102,
    "name": {
      "english": "Exeggcute",
      "japanese": "タマタマ",
      "chinese": "蛋蛋"
    },
    "type": [
      "Grass",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 40,
      "Defense": 80,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      "Speed": 40
    }
  },
  {
    "id": 103,
    "name": {
      "english": "Exeggutor",
      "japanese": "ナッシー",
      "chinese": "椰蛋树"
    },
    "type": [
      "Grass",
      "Psychic"
    ],
    "base": {
      "HP": 95,
      "Attack": 95,
      "Defense": 85,
      "Sp. Attack": 125,
      "Sp. Defense": 75,
      "Speed": 55
    }
  },
  {
    "id": 104,
    "name": {
      "english": "Cubone",
      "japanese": "カラカラ",
      "chinese": "卡拉卡拉"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 50,
      "Attack": 50,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 50,
      "Speed": 35
    }
  },
  {
    "id": 105,
    "name": {
      "english": "Marowak",
      "japanese": "ガラガラ",
      "chinese": "嘎啦嘎啦"
    },
    "type": [
      "Ground"
    ],
    "base": {
      "HP": 60,
      "Attack": 80,
      "Defense": 110,
      "Sp. Attack": 50,
      "Sp. Defense": 80,
      "Speed": 45
    }
  },
  {
    "id": 106,
    "name": {
      "english": "Hitmonlee",
      "japanese": "サワムラー",
      "chinese": "飞腿郎"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 120,
      "Defense": 53,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 87
    }
  },
  {
    "id": 107,
    "name": {
      "english": "Hitmonchan",
      "japanese": "エビワラー",
      "chinese": "快拳郎"
    },
    "type": [
      "Fighting"
    ],
    "base": {
      "HP": 50,
      "Attack": 105,
      "Defense": 79,
      "Sp. Attack": 35,
      "Sp. Defense": 110,
      "Speed": 76
    }
  },
  {
    "id": 108,
    "name": {
      "english": "Lickitung",
      "japanese": "ベロリンガ",
      "chinese": "大舌头"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 90,
      "Attack": 55,
      "Defense": 75,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 30
    }
  },
  {
    "id": 109,
    "name": {
      "english": "Koffing",
      "japanese": "ドガース",
      "chinese": "瓦斯弹"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 40,
      "Attack": 65,
      "Defense": 95,
      "Sp. Attack": 60,
      "Sp. Defense": 45,
      "Speed": 35
    }
  },
  {
    "id": 110,
    "name": {
      "english": "Weezing",
      "japanese": "マタドガス",
      "chinese": "双弹瓦斯"
    },
    "type": [
      "Poison"
    ],
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 120,
      "Sp. Attack": 85,
      "Sp. Defense": 70,
      "Speed": 60
    }
  },
  {
    "id": 111,
    "name": {
      "english": "Rhyhorn",
      "japanese": "サイホーン",
      "chinese": "独角犀牛"
    },
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 80,
      "Attack": 85,
      "Defense": 95,
      "Sp. Attack": 30,
      "Sp. Defense": 30,
      "Speed": 25
    }
  },
  {
    "id": 112,
    "name": {
      "english": "Rhydon",
      "japanese": "サイドン",
      "chinese": "钻角犀兽"
    },
    "type": [
      "Ground",
      "Rock"
    ],
    "base": {
      "HP": 105,
      "Attack": 130,
      "Defense": 120,
      "Sp. Attack": 45,
      "Sp. Defense": 45,
      "Speed": 40
    }
  },
  {
    "id": 113,
    "name": {
      "english": "Chansey",
      "japanese": "ラッキー",
      "chinese": "吉利蛋"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 250,
      "Attack": 5,
      "Defense": 5,
      "Sp. Attack": 35,
      "Sp. Defense": 105,
      "Speed": 50
    }
  },
  {
    "id": 114,
    "name": {
      "english": "Tangela",
      "japanese": "モンジャラ",
      "chinese": "蔓藤怪"
    },
    "type": [
      "Grass"
    ],
    "base": {
      "HP": 65,
      "Attack": 55,
      "Defense": 115,
      "Sp. Attack": 100,
      "Sp. Defense": 40,
      "Speed": 60
    }
  },
  {
    "id": 115,
    "name": {
      "english": "Kangaskhan",
      "japanese": "ガルーラ",
      "chinese": "袋兽"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 105,
      "Attack": 95,
      "Defense": 80,
      "Sp. Attack": 40,
      "Sp. Defense": 80,
      "Speed": 90
    }
  },
  {
    "id": 116,
    "name": {
      "english": "Horsea",
      "japanese": "タッツー",
      "chinese": "墨海马"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 40,
      "Defense": 70,
      "Sp. Attack": 70,
      "Sp. Defense": 25,
      "Speed": 60
    }
  },
  {
    "id": 117,
    "name": {
      "english": "Seadra",
      "japanese": "シードラ",
      "chinese": "海刺龙"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 55,
      "Attack": 65,
      "Defense": 95,
      "Sp. Attack": 95,
      "Sp. Defense": 45,
      "Speed": 85
    }
  },
  {
    "id": 118,
    "name": {
      "english": "Goldeen",
      "japanese": "トサキント",
      "chinese": "角金鱼"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 45,
      "Attack": 67,
      "Defense": 60,
      "Sp. Attack": 35,
      "Sp. Defense": 50,
      "Speed": 63
    }
  },
  {
    "id": 119,
    "name": {
      "english": "Seaking",
      "japanese": "アズマオウ",
      "chinese": "金鱼王"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 80,
      "Attack": 92,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 68
    }
  },
  {
    "id": 120,
    "name": {
      "english": "Staryu",
      "japanese": "ヒトデマン",
      "chinese": "海星星"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 45,
      "Defense": 55,
      "Sp. Attack": 70,
      "Sp. Defense": 55,
      "Speed": 85
    }
  },
  {
    "id": 121,
    "name": {
      "english": "Starmie",
      "japanese": "スターミー",
      "chinese": "宝石海星"
    },
    "type": [
      "Water",
      "Psychic"
    ],
    "base": {
      "HP": 60,
      "Attack": 75,
      "Defense": 85,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      "Speed": 115
    }
  },
  {
    "id": 122,
    "name": {
      "english": "Mr. Mime",
      "japanese": "バリヤード",
      "chinese": "魔墙人偶"
    },
    "type": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 65,
      "Sp. Attack": 100,
      "Sp. Defense": 120,
      "Speed": 90
    }
  },
  {
    "id": 123,
    "name": {
      "english": "Scyther",
      "japanese": "ストライク",
      "chinese": "飞天螳螂"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "base": {
      "HP": 70,
      "Attack": 110,
      "Defense": 80,
      "Sp. Attack": 55,
      "Sp. Defense": 80,
      "Speed": 105
    }
  },
  {
    "id": 124,
    "name": {
      "english": "Jynx",
      "japanese": "ルージュラ",
      "chinese": "迷唇姐"
    },
    "type": [
      "Ice",
      "Psychic"
    ],
    "base": {
      "HP": 65,
      "Attack": 50,
      "Defense": 35,
      "Sp. Attack": 115,
      "Sp. Defense": 95,
      "Speed": 95
    }
  },
  {
    "id": 125,
    "name": {
      "english": "Electabuzz",
      "japanese": "エレブー",
      "chinese": "电击兽"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 83,
      "Defense": 57,
      "Sp. Attack": 95,
      "Sp. Defense": 85,
      "Speed": 105
    }
  },
  {
    "id": 126,
    "name": {
      "english": "Magmar",
      "japanese": "ブーバー",
      "chinese": "鸭嘴火兽"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 95,
      "Defense": 57,
      "Sp. Attack": 100,
      "Sp. Defense": 85,
      "Speed": 93
    }
  },
  {
    "id": 127,
    "name": {
      "english": "Pinsir",
      "japanese": "カイロス",
      "chinese": "凯罗斯"
    },
    "type": [
      "Bug"
    ],
    "base": {
      "HP": 65,
      "Attack": 125,
      "Defense": 100,
      "Sp. Attack": 55,
      "Sp. Defense": 70,
      "Speed": 85
    }
  },
  {
    "id": 128,
    "name": {
      "english": "Tauros",
      "japanese": "ケンタロス",
      "chinese": "肯泰罗"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 75,
      "Attack": 100,
      "Defense": 95,
      "Sp. Attack": 40,
      "Sp. Defense": 70,
      "Speed": 110
    }
  },
  {
    "id": 129,
    "name": {
      "english": "Magikarp",
      "japanese": "コイキング",
      "chinese": "鲤鱼王"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 20,
      "Attack": 10,
      "Defense": 55,
      "Sp. Attack": 15,
      "Sp. Defense": 20,
      "Speed": 80
    }
  },
  {
    "id": 130,
    "name": {
      "english": "Gyarados",
      "japanese": "ギャラドス",
      "chinese": "暴鲤龙"
    },
    "type": [
      "Water",
      "Flying"
    ],
    "base": {
      "HP": 95,
      "Attack": 125,
      "Defense": 79,
      "Sp. Attack": 60,
      "Sp. Defense": 100,
      "Speed": 81
    }
  },
  {
    "id": 131,
    "name": {
      "english": "Lapras",
      "japanese": "ラプラス",
      "chinese": "拉普拉斯"
    },
    "type": [
      "Water",
      "Ice"
    ],
    "base": {
      "HP": 130,
      "Attack": 85,
      "Defense": 80,
      "Sp. Attack": 85,
      "Sp. Defense": 95,
      "Speed": 60
    }
  },
  {
    "id": 132,
    "name": {
      "english": "Ditto",
      "japanese": "メタモン",
      "chinese": "百变怪"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 48,
      "Attack": 48,
      "Defense": 48,
      "Sp. Attack": 48,
      "Sp. Defense": 48,
      "Speed": 48
    }
  },
  {
    "id": 133,
    "name": {
      "english": "Eevee",
      "japanese": "イーブイ",
      "chinese": "伊布"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 55,
      "Attack": 55,
      "Defense": 50,
      "Sp. Attack": 45,
      "Sp. Defense": 65,
      "Speed": 55
    }
  },
  {
    "id": 134,
    "name": {
      "english": "Vaporeon",
      "japanese": "シャワーズ",
      "chinese": "水伊布"
    },
    "type": [
      "Water"
    ],
    "base": {
      "HP": 130,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 65
    }
  },
  {
    "id": 135,
    "name": {
      "english": "Jolteon",
      "japanese": "サンダース",
      "chinese": "雷伊布"
    },
    "type": [
      "Electric"
    ],
    "base": {
      "HP": 65,
      "Attack": 65,
      "Defense": 60,
      "Sp. Attack": 110,
      "Sp. Defense": 95,
      "Speed": 130
    }
  },
  {
    "id": 136,
    "name": {
      "english": "Flareon",
      "japanese": "ブースター",
      "chinese": "火伊布"
    },
    "type": [
      "Fire"
    ],
    "base": {
      "HP": 65,
      "Attack": 130,
      "Defense": 60,
      "Sp. Attack": 95,
      "Sp. Defense": 110,
      "Speed": 65
    }
  },
  {
    "id": 137,
    "name": {
      "english": "Porygon",
      "japanese": "ポリゴン",
      "chinese": "多边兽"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 65,
      "Attack": 60,
      "Defense": 70,
      "Sp. Attack": 85,
      "Sp. Defense": 75,
      "Speed": 40
    }
  },
  {
    "id": 138,
    "name": {
      "english": "Omanyte",
      "japanese": "オムナイト",
      "chinese": "菊石兽"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 35,
      "Attack": 40,
      "Defense": 100,
      "Sp. Attack": 90,
      "Sp. Defense": 55,
      "Speed": 35
    }
  },
  {
    "id": 139,
    "name": {
      "english": "Omastar",
      "japanese": "オムスター",
      "chinese": "多刺菊石兽"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 70,
      "Attack": 60,
      "Defense": 125,
      "Sp. Attack": 115,
      "Sp. Defense": 70,
      "Speed": 55
    }
  },
  {
    "id": 140,
    "name": {
      "english": "Kabuto",
      "japanese": "カブト",
      "chinese": "化石盔"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 30,
      "Attack": 80,
      "Defense": 90,
      "Sp. Attack": 55,
      "Sp. Defense": 45,
      "Speed": 55
    }
  },
  {
    "id": 141,
    "name": {
      "english": "Kabutops",
      "japanese": "カブトプス",
      "chinese": "镰刀盔"
    },
    "type": [
      "Rock",
      "Water"
    ],
    "base": {
      "HP": 60,
      "Attack": 115,
      "Defense": 105,
      "Sp. Attack": 65,
      "Sp. Defense": 70,
      "Speed": 80
    }
  },
  {
    "id": 142,
    "name": {
      "english": "Aerodactyl",
      "japanese": "プテラ",
      "chinese": "化石翼龙"
    },
    "type": [
      "Rock",
      "Flying"
    ],
    "base": {
      "HP": 80,
      "Attack": 105,
      "Defense": 65,
      "Sp. Attack": 60,
      "Sp. Defense": 75,
      "Speed": 130
    }
  },
  {
    "id": 143,
    "name": {
      "english": "Snorlax",
      "japanese": "カビゴン",
      "chinese": "卡比兽"
    },
    "type": [
      "Normal"
    ],
    "base": {
      "HP": 160,
      "Attack": 110,
      "Defense": 65,
      "Sp. Attack": 65,
      "Sp. Defense": 110,
      "Speed": 30
    }
  },
  {
    "id": 144,
    "name": {
      "english": "Articuno",
      "japanese": "フリーザー",
      "chinese": "急冻鸟"
    },
    "type": [
      "Ice",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 85,
      "Defense": 100,
      "Sp. Attack": 95,
      "Sp. Defense": 125,
      "Speed": 85
    }
  },
  {
    "id": 145,
    "name": {
      "english": "Zapdos",
      "japanese": "サンダー",
      "chinese": "闪电鸟"
    },
    "type": [
      "Electric",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 90,
      "Defense": 85,
      "Sp. Attack": 125,
      "Sp. Defense": 90,
      "Speed": 100
    }
  },
  {
    "id": 146,
    "name": {
      "english": "Moltres",
      "japanese": "ファイヤー",
      "chinese": "火焰鸟"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "base": {
      "HP": 90,
      "Attack": 100,
      "Defense": 90,
      "Sp. Attack": 125,
      "Sp. Defense": 85,
      "Speed": 90
    }
  },
  {
    "id": 147,
    "name": {
      "english": "Dratini",
      "japanese": "ミニリュウ",
      "chinese": "迷你龙"
    },
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 41,
      "Attack": 64,
      "Defense": 45,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 50
    }
  },
  {
    "id": 148,
    "name": {
      "english": "Dragonair",
      "japanese": "ハクリュー",
      "chinese": "哈克龙"
    },
    "type": [
      "Dragon"
    ],
    "base": {
      "HP": 61,
      "Attack": 84,
      "Defense": 65,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 70
    }
  },
  {
    "id": 149,
    "name": {
      "english": "Dragonite",
      "japanese": "カイリュー",
      "chinese": "快龙"
    },
    "type": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "HP": 91,
      "Attack": 134,
      "Defense": 95,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    }
  },
  {
    "id": 150,
    "name": {
      "english": "Mewtwo",
      "japanese": "ミュウツー",
      "chinese": "超梦"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 106,
      "Attack": 110,
      "Defense": 90,
      "Sp. Attack": 154,
      "Sp. Defense": 90,
      "Speed": 130
    }
  },
  {
    "id": 151,
    "name": {
      "english": "Mew",
      "japanese": "ミュウ",
      "chinese": "梦幻"
    },
    "type": [
      "Psychic"
    ],
    "base": {
      "HP": 100,
      "Attack": 100,
      "Defense": 100,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 100
    }
  }
]

export default pokemonJson;