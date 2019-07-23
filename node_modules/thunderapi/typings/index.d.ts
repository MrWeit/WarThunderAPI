declare module thunderapi {

  export const version: string;

  export class ThunderAPI {
    public constructor(userAgent: string);
    private readonly USER_AGENT: string;
    private readonly requestManager: RequestManager;
    private readonly cacheSweepInterval: number;
    private cache: Map<string, Profile | Squadron>;
    private _intervals: any[];

    private _clearIntervals(): void;

    public getPlayer(
      player: string,
      getFromCache?: boolean,
      shouldCache?: boolean
    ): Promise<Profile>;
    public getSquadron(
      name: string,
      getFromCache?: boolean,
      shouldCache?: boolean
    ): Promise<Squadron>;
    public getNews(page?: number): Promise<NewsInfo>;
    public getUpdates(page?: number): Promise<NewsInfo>;
    public raw(key: string, name: string): Promise<object>;
    public sweepCache(): void;
  }

  export class RequestManager {
    private constructor(
      userAgent: string,
      version: string
    );
    private readonly version: string;
    private readonly USER_AGENT: string;

    private get(key: string, ...args: any[]): Promise<ProfileInfo|SquadronData|NewsInfo>;
  }

  export class Profile {
    public constructor(data: PlayerData);

    public readonly stats: Map<string, ProfileStats>;
    public readonly image: string;
    public readonly nick: string;
    public readonly level: number;
    public readonly registered: string;
    public readonly countries: Map<string, CountryInfo>;
    public readonly squadron: string;
    public readonly title: string;
  }

  export class Squadron {
    public constructor(data: SquadronData);

    public readonly name: string;
    public readonly image: string;
    public readonly players: number;
    public readonly description: string;
    public readonly createdAt: string;
    public readonly airKills: Map<string, string>;
    public readonly groundKills: Map<string, string>;
    public readonly deaths: Map<string, string>;
    public readonly flighttime: Map<string, string>;

    public members: Map<string, MemberInfo>;
  }

  // Types
  export type SquadronData = {
    name: string;
    image: string;
    players: number;
    description: string;
    createdAt: string;
    airKills: SquadronDifficultyStats;
    groundKills: SquadronDifficultyStats;
    deaths: SquadronDifficultyStats;
    flightTime: SquadronDifficultyStats;
    members: MemberInfo[];
  }

  export type MemberInfo = {
    name: string;
    rating: SquadronDifficultyStats;
    role: string;
    entry: string;
  }

  export type SquadronDifficultyStats = {
    arcade: string;
    realistic: string;
    simulator: string;
  }

  export type CountryInfo = {
    vehicles: number;
    elite: number;
    medals: number;
  }

  export type PlayerData = {
    profile: ProfileInfo;
    stats: DifficultyInfo;
  }

  export type ProfileInfo = {
    image: string;
    nick: string;
    title: string;
    squadron: string;
    level: number;
    registered: string;
    usa: CountryInfo;
    ussr: CountryInfo;
    britain: CountryInfo;
    germany: CountryInfo;
    japan: CountryInfo;
    italy: CountryInfo;
  }

  export type DifficultyInfo = {
    arcade: ProfileStats;
    realistic: ProfileStats;
    simulator: ProfileStats;
  }

  export type ProfileStats = {
    victories: number;
    completed: number;
    ratio: string;
    sessions: number;
    deaths: number;
    fighter: string;
    bomber: string;
    attacker: string;
    tank: string;
    tankdestroyer: string;
    heavytank: string;
    spaa: string;
    airkills: number;
    groundkills: number;
    battletime: string;
  }

  export type NewsInfo = {
    url: string;
    title: string;
    text: string;
    date: string;
    comments: number;
  }
}
