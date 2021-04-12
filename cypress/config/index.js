import { pageRoutes } from '../../src/routes'

export const resolutions = [
  {
    device: 'iPhone-5-SE',
    width: 320,
    height: 568,
  },
  {
    device: 'iPhone-10',
    width: 375,
    height: 812,
  },
  {
    device: 'iPad',
    width: 1334,
    height: 750,
  },
  {
    device: 'Macbook-Air',
    width: 1440,
    height: 900,
  },
]

export const pages = [pageRoutes.HOME_PAGE]

export const data = `{
  "grill": {
    "width": 400,
    "height": 200,
    "grillItems": [
      {
        "width": 50,
        "height": 30,
        "count": 15,
        "title": "Steak"
      },
      {
        "width": 140,
        "height": 140,
        "count": 2,
        "title": "Sausage"
      },
      {
        "width": 130,
        "height": 60,
        "count": 4,
        "title": "Tomato"
      },
      {
        "width": 20,
        "height": 10,
        "count": 37,
        "title": "Veal"
      }
    ]
  }
}`
