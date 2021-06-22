export default class Utils {

  static adaptToClient(offerFromServer) {
    const adaptedOfferForClient = Object.assign(
      {},
      offerFromServer,
      {
        host: Object.assign(
          offerFromServer.host,
          {
            avatarUrl: offerFromServer.host.avatar_url,
            isPro: offerFromServer.host.is_pro,
          },
        ),
        isFavorite: offerFromServer.is_favorite,
        isPremium: offerFromServer.is_premium,
        maxAdults: offerFromServer.max_adults,
        previewImage: offerFromServer.preview_image,
      },
    );

    // Ненужные ключи мы удаляем
    delete adaptedOfferForClient.host.avatar_url;
    delete adaptedOfferForClient.host.is_pro;

    delete adaptedOfferForClient.is_favorite;
    delete adaptedOfferForClient.is_premium;
    delete adaptedOfferForClient.max_adults;
    delete adaptedOfferForClient.preview_image;

    return adaptedOfferForClient;
  }

  static adaptToServer(filmFromClient) {
    const filmInfoForServer = Object.assign(
      {},
      {},
    );

    return filmInfoForServer;
  }

  static getFavoritePlacesSeparatedByCity(places) {
    const favoritePlaces = new Map();

    places.forEach((place) => {
      if (place.isFavorite) {
        if (favoritePlaces.has(place.city.name)) {
          favoritePlaces.get(place.city.name).push(place);
        } else {
          favoritePlaces.set(place.city.name, []);
          favoritePlaces.get(place.city.name).push(place);
        }
      }
    });

    return favoritePlaces;
  }
}
