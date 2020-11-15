export interface Weather {
  base: string;
  main: WeatherData;
  name: string;
  visibility: number;
  weather: WeatherDescription;
  wind: Wind;
}

export interface WeatherData {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherDescription {
  description: string;
  icon: string; // "50n"
  id: string;
  main: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
