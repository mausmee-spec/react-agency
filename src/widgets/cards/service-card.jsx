import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";


export function SearviceCard({ color, icon, title, description }) {
  return (
    <Card className="shadow-none">
      <CardBody className="px-8 text-center">
        <img
                    alt="Card Image"
                    src='/img/icon2.png'
                    className="m-auto"
                  />
        <Typography variant="h5" className="mb-2" color="blue-gray">
          {title}
        </Typography>
        <Typography className="font-normal mb-6 text-blue-gray-600">
          {description}
        </Typography>
        <Button variant="contained" className="rounded-[20px] bg-gradient-to-b from-[#dcafe1] to-[#eabec9]">learn more</Button>
      </CardBody>
    </Card>
  );
}

SearviceCard.defaultProps = {
  color: "blue",
};

SearviceCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

SearviceCard.displayName = "/src/widgets/layout/service-card.jsx";

export default SearviceCard; 
