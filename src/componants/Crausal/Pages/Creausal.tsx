import { useEffect, useState } from "react";
import { dummyDataObj } from "../../Pagination/Pages/PaginationData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crausal: React.FC = () => {
  const [dummyData, setDummyData] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = async () => {
    const jsonData = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    if (jsonData && jsonData.products) {
      setDummyData(jsonData.products);
    }
  };

  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {dummyData.map((element: dummyDataObj) => {
            return (
              <>
                <div style={{ padding: "10px" }}>
                  <Card
                    sx={{ maxWidth: 345, background: "Black", color: "#fff" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={element.thumbnail}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {element.brand}
                        </Typography>
                        <Typography variant="body2" color="#fff">
                          {element.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Crausal;
