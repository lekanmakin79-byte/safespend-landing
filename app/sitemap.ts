import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url:
      "https://safespend.app",

      lastModified:
      new Date(),

      changeFrequency:
      "monthly",

      priority:
      1,
    },

  ];

}