import { Player } from './Player';

export class Team {
  players: Player[];
  teamName: string;
  constructor(players: Player[], teamName: string) {
    this.players = players;
    this.teamName = teamName;
  }

  
  addPlayer(player: Player): void {
    this.players.push(player);
  }
  removePlayer(player: Player): void {
    let index = this.players.indexOf(player);
    this.players.slice(index)
  }
  setActive(player: Player): void {
    let index = this.players.indexOf(player);
    this.players[index].active = true;
  }
  getPlayerCount(): number {
    return this.players.length
  }
  logActivePlayers(): void {
    this.players.map((player) => {
      player.active && console.log(`${player.name} is active.`)
    })
  }

  getActivePlayers(): Player[] {
    let activePlayers = this.players.filter(player => {
      player.active = true;
    })
    // console.log(activePlayers);
    return activePlayers;
  }
}
