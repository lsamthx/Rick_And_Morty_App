import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://rickandmortyapi.com/api/character", ({ request }) => {
    const url = new URL(request.url);

    const page = url.searchParams.get("page") ?? "1";
    const name = url.searchParams.get("name") ?? "";

    const mockData = {
      info: { pages: 3 },
      results: [
        {
          id: 1,
          name: `Character ${name} page ${page}`,
          status: "Alive",
          species: "Human",
          gender: "Male",
          origin: { name: "Earth" },
          location: { name: "Earth" },
          image: "https://example.com/image.jpg",
        },
      ],
    };

    return HttpResponse.json(mockData);
  }),

  http.get("https://rickandmortyapi.com/api/character/:ids", ({ params }) => {
    const ids = (params.ids as string).split(",");

    const results = ids.map((id) => ({
      id: Number(id),
      name: `Favorite ${id}`,
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: { name: "Origin" },
      location: { name: "Location" },
      image: "https://example.com/image.jpg",
    }));

    return HttpResponse.json(results);
  }),
];