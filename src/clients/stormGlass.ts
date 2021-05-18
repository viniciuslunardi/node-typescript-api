import { AxiosStatic } from 'axios';

export interface StormGlassForecastResponse {

}

export class StormGlass {
	readonly stormGlassAPIParams =
		'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
	readonly stormGlassAPISource = 'noaa';
	
	constructor(protected request: AxiosStatic) {
	}
	
	public async fetchPoints(lat: number, lng: number): Promise<{}> {
		await this.request.get(
			`https://api.stormglass.io/v2/weather/point?lat=${ lat }&lng=${ lng }&params=${ this.stormGlassAPIParams }&source=${ this.stormGlassAPISource }`,
			{
				headers: {
					Authorization:
						'7d80705a-b760-11eb-80d0-0242ac130002-7d8070f0-b760-11eb-80d0-0242ac130002',
				},
			},
		);
		
		return Promise.resolve({});
	}
}
