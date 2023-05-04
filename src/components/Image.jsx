import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./img.css";

export default function Image() {
  return (
    <ImageList
      className="signup img"
      sx={{ width: 1280, height: 600 }}
      variant="woven"
      cols={3}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/474x/db/fe/3f/dbfe3fee9de630d93c2f46393367ccf7.jpg",
    title: "парфюм",
  },
  {
    img: "https://i.pinimg.com/474x/92/25/63/92256343ce48d51cf35f43294f8f414a.jpg",
    title: "косметика",
  },
  {
    img: "https://i.pinimg.com/474x/83/ba/0e/83ba0e1a6ba6bb34bc30c000ff6f7314.jpg",
    title: "еда",
  },
  {
    img: "https://i.pinimg.com/474x/2e/d0/d4/2ed0d4b2263b95030ae84b328a6932b5.jpg",
    title: "туфли",
  },
  {
    img: "https://i.pinimg.com/474x/18/b5/b4/18b5b4d037e5351feb570e26dac50caf.jpg",
    title: "Chairs",
  },
  {
    img: "https://i.pinimg.com/474x/9b/c9/ed/9bc9edd34185829811219b750249c049.jpg",
    title: "уют",
  },
  {
    img: "https://i.pinimg.com/474x/5e/42/69/5e4269606ce3cd53a91a85f98309fef3.jpg",
    title: "кофе",
  },
  {
    img: "https://i.pinimg.com/474x/45/f4/e2/45f4e2d2fb1f44b505f385444321ed3d.jpg",
    title: "машина",
  },
  {
    img: "https://i.pinimg.com/474x/d1/67/80/d167807c90d68ee484d45911d67997c1.jpg",
    title: "красота",
  },
  {
    img: "https://i.pinimg.com/474x/67/d3/32/67d332311767e221169c0e55921bebb8.jpg",
    title: "девушка",
  },
  {
    img: "https://i.pinimg.com/564x/44/0c/43/440c430e233cfad6986fe0f335d13fd2.jpg",
    title: "нокти",
  },
  {
    img: "https://i.pinimg.com/474x/0a/39/75/0a3975ed1be8d2d184c86f2ded92aa5f.jpg",
    title: "Blinds",
  },
  {
    img: "https://i.pinimg.com/474x/f7/6d/dd/f76ddd4c0e2b1b9b1ca8f5dbfd66281e.jpg",
    title: "сщднце",
  },
  {
    img: "https://i.pinimg.com/474x/5d/45/a4/5d45a4e4c9d3861d369765e82da5915b.jpg",
    title: "цветы",
  },
  {
    img: "https://i.pinimg.com/474x/75/41/30/7541306b2d119534e1297bb4dc18ba0e.jpg",
    title: "луна",
  },
  {
    img: "https://i.pinimg.com/474x/9c/98/24/9c9824c487dbd96758b9e3859d75c9ca.jpg",
    title: "корабль",
  },
  {
    img: "https://i.pinimg.com/474x/d3/7b/64/d37b64dfd0ed5078aa0f3a994f39723e.jpg",
    title: "Blinds",
  },
  {
    img: "https://i.pinimg.com/474x/61/8b/3d/618b3d63e17863783f4010e1d5a142e4.jpg",
    title: "луна",
  },
  {
    img: "https://i.pinimg.com/564x/a4/3b/e1/a43be1fe03a0908bf7b088bda312c941.jpg",
    title: "луна",
  },
  {
    img: "https://i.pinimg.com/564x/e6/4c/50/e64c5098ac2fe14d715bbcca1d22e676.jpg",
    title: "лунаcsc",
  },
  {
    img: "https://i.pinimg.com/236x/04/91/c8/0491c854514d741abfa2cb00bcb74832.jpg",
    title: "луcfdhна",
  },
];
