import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
  Button
} from "@material-tailwind/react";


export function FeatureCard({ color, icon, title, description }) {
  return (
    <Card className="shadow-[0_10px_15px_-3px_rgba(58 ,158 ,158 , 0.1)]">
      <CardBody className="px-8 text-center">
        <img
                    alt="Card Image"
                    src='/img/icon.png'
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

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
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

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
