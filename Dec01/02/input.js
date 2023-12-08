const input = {
  Game1:
    "1 green, 2 blue; 15 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue",
  Game2:
    "5 green, 2 red, 18 blue; 18 blue, 6 red, 9 green; 6 blue, 3 green; 6 green, 1 red, 9 blue; 19 blue, 2 green, 6 red",
  Game3:
    "16 red, 10 green; 12 red, 6 blue, 9 green; 10 green, 5 blue; 10 green, 16 red; 5 red, 8 green, 8 blue",
  Game4:
    "9 blue, 20 green; 1 red, 3 blue, 10 green; 7 blue, 18 green; 4 blue, 20 green; 8 blue, 1 green, 1 red; 1 green",
  Game5:
    "3 green, 8 red; 1 blue, 10 red; 6 red, 4 green; 8 red, 1 blue, 3 green; 1 blue, 4 green, 3 red; 1 green, 1 blue, 4 red",
  Game6: "7 green, 15 red, 11 blue; 2 red, 12 blue; 11 red, 11 green",
  Game7:
    "14 green, 10 blue, 4 red; 3 red, 11 green, 14 blue; 1 red, 2 green, 11 blue; 9 green, 1 red; 6 red, 6 blue, 9 green",
  Game8:
    "1 red, 6 green, 3 blue; 4 green; 4 red, 3 green, 1 blue; 2 red, 10 green, 3 blue; 2 green, 6 red, 3 blue",
  Game9:
    "2 green, 8 red, 3 blue; 2 green, 4 blue, 2 red; 2 green, 5 blue, 2 red",
  Game10:
    "9 green, 1 blue; 2 blue, 12 green, 3 red; 2 red, 3 blue, 1 green; 3 blue, 8 green; 4 blue, 4 red, 1 green; 5 green, 4 blue",
  Game11: "5 red, 2 blue, 2 green; 3 blue, 2 green, 8 red; 6 red, 1 green",
  Game12:
    "8 blue, 7 green; 2 green, 2 red, 7 blue; 4 green, 1 red, 20 blue; 5 green, 13 blue, 2 red",
  Game13:
    "1 blue, 11 green, 13 red; 6 blue, 13 red, 19 green; 5 blue, 6 green, 6 red",
  Game14:
    "12 blue, 1 red, 15 green; 16 green; 1 red, 18 blue, 15 green; 14 blue; 12 blue, 1 red, 8 green; 4 blue, 16 green",
  Game15: "6 blue, 3 green; 1 red, 1 blue, 2 green; 3 green, 4 blue, 7 red",
  Game16:
    "17 red, 14 green, 6 blue; 5 blue, 2 red; 1 blue, 11 red, 2 green; 13 green, 12 red",
  Game17: "14 green, 4 red; 1 green, 5 blue, 15 red; 5 green, 14 red, 5 blue",
  Game18:
    "8 blue, 2 green, 1 red; 12 blue, 1 green; 1 green, 1 red, 5 blue; 1 green, 1 red, 9 blue",
  Game19:
    "1 red, 2 blue; 2 green, 5 red; 1 blue, 2 green, 11 red; 10 red; 4 green, 11 red",
  Game20:
    "5 red, 11 green, 5 blue; 2 red, 5 blue, 7 green; 12 blue, 5 green, 10 red; 4 blue, 15 red, 10 green; 11 green, 12 blue, 7 red; 15 red, 12 blue, 5 green",
  Game21:
    "5 blue, 6 green, 1 red; 18 blue, 13 green; 7 blue, 3 red; 9 blue, 2 red, 14 green",
  Game22:
    "4 blue, 2 green, 19 red; 11 green, 5 blue, 17 red; 12 red, 4 blue, 13 green; 2 blue, 11 green; 1 blue, 19 red, 10 green; 8 blue, 2 green",
  Game23:
    "12 green, 6 red; 1 blue, 1 red, 11 green; 1 blue, 3 red, 8 green; 4 green, 8 red",
  Game24: "8 blue, 1 green, 6 red; 6 blue, 9 red; 8 red, 1 green, 1 blue",
  Game25:
    "2 red, 4 blue, 1 green; 1 blue, 4 red, 2 green; 1 green, 5 blue, 1 red; 3 red, 2 blue",
  Game26:
    "2 green, 10 blue, 5 red; 14 blue, 6 green, 12 red; 7 green, 2 red, 1 blue; 3 blue, 5 green, 3 red; 7 blue, 1 red, 3 green; 5 red, 2 green, 6 blue",
  Game27:
    "8 blue, 2 red; 2 green, 8 blue, 6 red; 4 green, 2 red; 2 blue, 4 green, 7 red",
  Game28: "8 green; 1 red, 9 blue, 10 green; 8 green, 9 blue, 2 red",
  Game29:
    "5 red, 3 green, 2 blue; 12 red, 6 blue, 1 green; 6 red, 12 blue; 2 green, 4 blue, 5 red",
  Game30:
    "9 red, 1 blue, 2 green; 13 green, 12 blue, 11 red; 11 red, 5 green, 9 blue; 4 blue, 12 green, 3 red; 10 red, 8 green; 2 red, 3 blue, 12 green",
  Game31: "11 green, 5 red; 1 green, 4 red; 6 green, 9 red, 2 blue",
  Game32:
    "6 blue, 3 red; 2 red, 11 blue, 4 green; 1 green, 4 red, 12 blue; 3 blue, 2 red",
  Game33:
    "1 green, 7 red; 15 red, 15 green, 1 blue; 15 green, 3 red; 1 blue, 13 green, 6 red; 1 blue, 13 green, 20 red",
  Game34:
    "3 red, 5 green, 1 blue; 13 green, 5 blue, 2 red; 3 red, 3 blue, 8 green; 3 blue, 1 red, 1 green; 4 blue, 3 red; 9 green, 3 red",
  Game35:
    "6 blue, 8 green; 6 red, 9 blue, 12 green; 4 green, 3 blue; 5 red, 3 blue",
  Game36:
    "17 green, 1 red, 1 blue; 1 red, 7 blue, 13 green; 6 blue, 5 green; 9 blue, 6 red, 5 green",
  Game37:
    "2 green, 16 blue, 1 red; 3 red, 5 blue, 4 green; 3 green, 5 red, 2 blue",
  Game38:
    "10 red, 3 blue, 1 green; 2 blue, 4 red; 7 red, 1 blue; 8 blue, 5 red, 11 green; 12 green, 4 blue, 8 red",
  Game39:
    "3 blue, 3 green, 1 red; 5 green, 9 blue; 1 green, 6 blue; 5 blue, 7 green, 1 red; 9 blue, 1 green",
  Game40:
    "1 blue, 2 red, 2 green; 2 green, 14 blue; 2 red, 6 blue; 13 blue; 2 green, 10 blue",
  Game41:
    "1 red, 1 blue, 1 green; 11 green, 1 red; 4 green; 5 green; 1 blue, 1 red, 10 green",
  Game42:
    "4 blue, 3 red, 2 green; 6 red, 1 blue, 6 green; 11 red, 7 blue, 3 green; 6 blue, 7 red, 1 green; 11 red, 1 green, 6 blue; 2 blue, 4 green, 10 red",
  Game43: "3 red, 5 blue; 2 green, 4 red, 3 blue; 7 red, 10 blue, 13 green",
  Game44:
    "13 green, 5 blue, 3 red; 1 green, 5 blue, 8 red; 11 green, 4 blue, 9 red; 5 blue, 7 green, 9 red",
  Game45: "12 red, 9 blue, 5 green; 9 green, 3 red; 3 green, 11 blue, 15 red",
  Game46: "5 blue, 2 green, 1 red; 1 blue, 3 red, 3 green; 2 green, 7 blue",
  Game47:
    "8 red, 8 green, 5 blue; 12 blue, 8 green, 7 red; 5 red, 1 blue, 2 green; 1 red, 4 green, 6 blue; 1 red, 3 blue; 5 green, 1 red, 3 blue",
  Game48: "3 blue, 2 red, 5 green; 4 green, 5 blue; 3 blue, 13 green, 5 red",
  Game49:
    "4 red, 9 blue, 1 green; 12 red, 8 blue; 5 red, 2 blue, 1 green; 11 red, 2 green, 9 blue; 8 red, 9 blue, 3 green",
  Game50:
    "3 blue, 2 red; 3 blue, 7 green; 4 red, 2 blue, 8 green; 7 green, 2 blue, 4 red; 3 red, 3 green; 6 green, 4 red, 2 blue",
  Game51:
    "9 blue, 4 red, 2 green; 5 red, 3 green, 3 blue; 5 green, 10 blue, 5 red; 8 red, 11 blue, 5 green; 1 red, 3 blue, 7 green",
  Game52:
    "1 blue, 9 red, 6 green; 8 red, 1 blue, 4 green; 13 green, 3 blue, 6 red; 3 green, 9 red; 3 blue, 12 green, 7 red",
  Game53: "1 blue, 9 green; 1 red, 2 green; 7 green, 1 red",
  Game54:
    "3 green, 3 blue, 9 red; 6 blue, 11 green, 1 red; 6 green, 1 red, 4 blue; 4 blue, 2 red, 13 green; 3 green, 1 red; 6 blue, 3 green, 8 red",
  Game55:
    "1 blue, 6 green; 4 red, 5 green; 8 red, 12 green; 5 red, 1 blue, 7 green; 1 blue, 11 red, 3 green",
  Game56:
    "1 green, 11 red, 1 blue; 2 green, 8 blue, 3 red; 5 blue, 6 red, 1 green",
  Game57:
    "5 green, 3 red, 2 blue; 10 green, 12 blue, 16 red; 7 blue, 13 red, 11 green",
  Game58:
    "5 green, 16 blue, 5 red; 9 blue, 2 green, 5 red; 5 blue, 3 red, 9 green",
  Game59: "2 blue, 2 red; 7 blue, 3 green, 4 red; 2 green, 1 blue",
  Game60:
    "12 red, 5 green, 1 blue; 2 blue, 12 red, 4 green; 16 red, 4 green, 2 blue",
  Game61:
    "3 green, 1 blue, 6 red; 4 green, 1 blue, 8 red; 4 red, 1 blue, 1 green; 4 green, 13 red",
  Game62:
    "2 red, 4 blue; 2 blue, 13 green, 8 red; 4 red, 9 green, 4 blue; 8 green, 3 red, 7 blue; 3 blue, 6 red, 3 green",
  Game63:
    "1 green, 3 blue; 6 blue, 4 red, 3 green; 3 blue, 1 green, 1 red; 2 green, 2 blue, 3 red; 1 red, 2 blue; 5 red, 6 blue",
  Game64:
    "7 red, 10 blue, 4 green; 1 green, 18 red, 2 blue; 7 blue, 2 green; 10 red, 1 green, 7 blue; 3 green, 5 blue, 11 red",
  Game65:
    "11 red, 2 blue; 1 green, 2 blue, 1 red; 3 blue, 2 green, 3 red; 3 blue, 3 red, 7 green",
  Game66:
    "3 red, 7 blue, 11 green; 10 blue, 4 green, 9 red; 11 blue, 11 red, 12 green; 8 red, 7 blue, 10 green; 5 red, 14 green, 3 blue",
  Game67: "5 green, 1 red; 7 green, 4 blue; 3 red, 1 green, 3 blue",
  Game68:
    "9 blue, 11 green, 10 red; 12 blue, 3 red, 3 green; 8 red, 7 green, 9 blue",
  Game69: "1 green, 7 blue, 1 red; 1 red, 9 blue; 1 green, 2 red",
  Game70:
    "9 green, 2 blue, 1 red; 1 red, 2 blue, 16 green; 13 green, 4 blue, 13 red; 8 red, 7 green, 6 blue; 12 green, 3 blue, 3 red",
  Game71:
    "2 green, 4 red, 6 blue; 11 green, 6 blue, 2 red; 3 green, 1 blue, 5 red; 7 blue, 6 green",
  Game72:
    "4 blue, 1 green; 4 blue; 1 green, 3 blue; 4 blue; 1 red, 4 blue; 3 blue",
  Game73:
    "4 red, 1 green, 7 blue; 15 green, 4 blue, 17 red; 19 green, 3 blue, 11 red; 13 green, 5 blue, 1 red; 10 blue, 13 green, 17 red",
  Game74:
    "9 green, 2 blue, 18 red; 5 red, 8 green; 3 green, 4 blue, 3 red; 5 green, 3 blue",
  Game75:
    "1 red, 10 blue, 1 green; 2 red, 19 blue; 4 red, 10 blue; 3 red, 7 blue, 1 green; 2 red, 3 blue",
  Game76: "4 green, 9 red, 7 blue; 8 green, 7 blue; 12 green, 9 red",
  Game77:
    "1 red, 6 blue, 2 green; 8 red, 5 green, 4 blue; 4 blue, 2 red, 3 green",
  Game78: "9 blue, 1 red, 8 green; 2 green, 9 blue; 2 green, 9 blue",
  Game79:
    "4 blue, 4 green, 1 red; 4 blue, 4 red, 4 green; 4 green, 1 blue, 6 red; 6 green; 6 red",
  Game80:
    "13 red, 8 blue; 2 green, 14 red, 13 blue; 7 red, 9 blue; 11 red, 18 blue; 2 blue, 3 red, 1 green",
  Game81:
    "2 green, 9 red, 12 blue; 5 green, 5 red, 13 blue; 5 blue, 5 red; 2 red, 8 blue",
  Game82:
    "6 red, 15 green; 1 blue, 15 red, 13 green; 6 green, 1 blue, 1 red; 5 red, 6 green, 1 blue",
  Game83:
    "1 green; 1 blue, 1 green, 10 red; 7 red, 1 blue; 1 green, 11 red; 2 blue, 1 green, 3 red",
  Game84:
    "17 green, 8 red; 1 blue, 14 green, 2 red; 6 red, 1 blue, 6 green; 4 red, 10 green, 1 blue; 2 red, 2 blue, 1 green; 4 blue, 5 green, 3 red",
  Game85:
    "5 blue, 3 red; 1 blue, 1 green; 6 green, 1 blue, 1 red; 4 green, 2 blue, 7 red",
  Game86:
    "7 red, 3 blue, 4 green; 1 blue, 13 red; 3 red, 3 blue, 6 green; 1 blue, 1 green, 17 red; 8 blue, 13 red, 4 green; 6 blue, 4 green, 17 red",
  Game87:
    "10 red, 3 green, 4 blue; 12 green, 10 red, 3 blue; 2 green, 16 red; 16 red, 3 blue, 14 green; 14 green, 11 red, 1 blue; 9 red, 4 blue, 6 green",
  Game88:
    "7 green, 4 red, 19 blue; 1 green, 5 red, 18 blue; 19 blue, 3 green, 6 red; 9 green, 14 blue, 5 red; 3 green, 5 red",
  Game89:
    "4 red, 2 blue, 10 green; 6 blue, 5 red; 3 green, 4 blue, 1 red; 12 green, 2 red, 2 blue; 3 blue, 3 green, 3 red",
  Game90:
    "1 green, 19 red, 1 blue; 7 blue, 4 green, 10 red; 6 blue, 3 green, 13 red",
  Game91:
    "1 green, 9 blue; 7 green, 4 red, 3 blue; 6 green, 2 red, 8 blue; 1 red, 1 blue; 3 red, 2 green",
  Game92:
    "18 red, 2 green, 2 blue; 6 blue, 4 red, 6 green; 3 blue, 10 red; 8 blue, 2 green, 7 red",
  Game93:
    "13 blue, 3 green, 15 red; 14 red, 2 green, 7 blue; 1 blue, 4 green, 13 red; 19 red, 5 green",
  Game94:
    "6 blue; 5 green, 8 blue; 1 red, 9 blue; 1 red, 8 blue; 5 green, 6 blue; 1 red",
  Game95:
    "9 blue, 14 green; 2 green, 1 red, 1 blue; 1 red, 3 green, 2 blue; 6 green, 1 red; 1 red, 8 blue, 14 green; 1 green, 5 blue",
  Game96:
    "7 blue, 17 green; 19 green, 3 red, 2 blue; 6 green, 2 red, 2 blue; 3 blue, 16 green; 3 red, 20 green; 4 green, 2 blue",
  Game97: "1 green, 1 red, 1 blue; 4 red, 2 blue; 7 red; 6 red; 7 red",
  Game98:
    "2 red, 15 green; 10 green, 1 red; 1 red, 11 blue, 11 green; 13 blue, 8 green, 2 red; 1 red, 12 green, 7 blue",
  Game99:
    "14 red, 2 blue, 1 green; 3 green, 13 red, 9 blue; 9 red, 9 blue, 2 green; 13 red, 7 green, 5 blue; 5 blue, 3 green, 11 red",
  Game100:
    "1 blue, 1 red, 1 green; 8 blue, 1 green; 1 green, 7 blue, 1 red; 1 green, 4 blue, 1 red; 1 green, 3 blue",
};
export { input };
