import ContentLoader from "react-content-loader";
import { useWindowSize } from "react-use";

const SearchResultLoader = (props: any) => {
  const { width } = useWindowSize();
  return (
    <ContentLoader
      width={1060}
      height={width < 600 ? 150 : 230}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      {props.imageType === "circle" ? (
        <circle cx="60" cy="45" r="30" />
      ) : (
        <rect
          x="50"
          y="20"
          rx="10"
          ry="10"
          width={width < 600 ? "100" : "150"}
          height={width < 600 ? "120" : "190"}
        />
      )}
      <rect
        x={width < 600 ? "180" : "250"}
        y="30"
        rx="5"
        ry="5"
        width={width < 600 ? "200" : "400"}
        height={width < 600 ? "10" : "20"}
      />
      <rect
        x={width < 600 ? "180" : "250"}
        y={width < 600 ? "45" : "60"}
        rx="5"
        ry="5"
        width={width < 600 ? "180" : "380"}
        height={width < 600 ? "10" : "20"}
      />
      <rect
        x={width < 600 ? "180" : "250"}
        y={width < 600 ? "60" : "90"}
        rx="5"
        ry="5"
        width={width < 600 ? "160" : "360"}
        height={width < 600 ? "10" : "20"}
      />
    </ContentLoader>
  );
};

// {props.imageType === "circle" ? (
// 	<circle cx="60" cy="45" r="30" />
// ) : (
// 	<rect x="50" y="20" rx="20" ry="20" width={width < 600 ? "100" : "150"} height={width < 600 ? "120" : "190"} />
// )}
// <rect x={width < 600 ? "180" : "250"} y="30" rx="5" ry="5" width={width < 600 ? "200" : "400"} height={width < 600 ? "10" : "20"}/>
// <rect x={width < 600 ? "180" : "250"} y={width < 600 ? "45" : "60"} rx="5" ry="5" width={width < 600 ? "180" : "380"} height={width < 600 ? "10" : "20"} />
// <rect x={width < 600 ? "180" : "250"} y={width < 600 ? "60" : "90"} rx="5" ry="5" width={width < 600 ? "160" : "360"} height={width < 600 ? "10" : "20"}/>

// let height, width;

// switch (props.screen) {
//   case "mobile": {
// 	height = "100";
// 	width = "400";
// 	break;
//   }
//   case "desktop": {
// 	height = "100";
// 	width = "1060";
// 	break;
//   }
//   case "large-screen": {
// 	height = "150";
// 	width = "1920";
// 	break;
//   }
//   default: {
// 	height = "100";
// 	width = "1060";
// 	break;
//   }
// }

export default SearchResultLoader;
