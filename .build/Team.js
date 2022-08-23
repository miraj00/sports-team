var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  Team: () => Team
});
class Team {
  players;
  teamName;
  constructor(players, teamName) {
    this.players = players;
    this.teamName = teamName;
  }
  addPlayer(player) {
    this.players.push(player);
  }
  removePlayer(player) {
    let index = this.players.indexOf(player);
    this.players.slice(index);
  }
  setActive(player) {
    let index = this.players.indexOf(player);
    this.players[index].active = true;
  }
  getPlayerCount() {
    return this.players.length;
  }
  logActivePlayers() {
    this.players.map((player) => {
      player.active && console.log(`${player.name} is active.`);
    });
  }
  getActivePlayers() {
    let activePlayers = this.players.filter((player) => {
      player.active = true;
    });
    return activePlayers;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Team
});
//# sourceMappingURL=Team.js.map
