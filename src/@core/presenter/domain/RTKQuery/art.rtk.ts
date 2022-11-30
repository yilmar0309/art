import API from '@presenter/io/config';
import {ArtEntity} from '../entity/art.entity';
import {ResponseEntity} from '../entity/response.entity';
import {baseApi} from './base.rtk';

export const artApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getAllArt: build.query<ResponseEntity<ArtEntity[]>, number>({
      query: page => `${API.endpoints.getAllArt}?page=${page}`,
    }),
    getArtById: build.query<ResponseEntity<ArtEntity>, number>({
      query: id => `${API.endpoints.getAllArt}/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllArtQuery, useGetArtByIdQuery} = artApi;
