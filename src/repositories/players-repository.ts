import { PlayerModel } from '../models/player-model'

const database: PlayerModel[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    club: 'Paris Saint-Germain',
    nationality: 'Argentina',
    position: 'Atacante',
    statistics: {
      Overall: 95,
      Pace: 88,
      Shooting: 92,
      Passing: 95,
      Dribbling: 97,
      Defending: 68,
      Physical: 75,
    },
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    club: 'Al-Nassr',
    nationality: 'Portugal',
    position: 'Atacante',
    statistics: {
      Overall: 92,
      Pace: 85,
      Shooting: 94,
      Passing: 85,
      Dribbling: 88,
      Defending: 60,
      Physical: 88,
    },
  },
  {
    id: 3,
    name: 'Neymar Jr.',
    club: 'Paris Saint-Germain',
    nationality: 'Brasil',
    position: 'Atacante',
    statistics: {
      Overall: 92,
      Pace: 91,
      Shooting: 88,
      Passing: 90,
      Dribbling: 95,
      Defending: 65,
      Physical: 80,
    },
  },
  {
    id: 4,
    name: 'Kylian Mbappé',
    club: 'Paris Saint-Germain',
    nationality: 'França',
    position: 'Atacante',
    statistics: {
      Overall: 93,
      Pace: 97,
      Shooting: 90,
      Passing: 85,
      Dribbling: 93,
      Defending: 70,
      Physical: 85,
    },
  },
  {
    id: 5,
    name: 'Robert Lewandowski',
    club: 'Barcelona',
    nationality: 'Polônia',
    position: 'Atacante',
    statistics: {
      Overall: 92,
      Pace: 85,
      Shooting: 94,
      Passing: 85,
      Dribbling: 85,
      Defending: 60,
      Physical: 90,
    },
  },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p) => p.id === id)

  if (index !== -1) {
    database.splice(index, 1)
  }
}
