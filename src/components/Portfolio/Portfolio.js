import "./Portfolio.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import testImage from "../../assets/images/Fredrik-natural.png";
import sonar_wars from "../../assets/images/sonar-wars.png";
import portfolio_page from "../../assets/images/portfolio-page.png";
import mapty_app from "../../assets/images/mapty-app.png";
import donut_shop from "../../assets/images/donut-shop.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio--container" id="portfolio">
      <h1>PREVIOUS WORK</h1>
      <p className="portfolio--body">
        Here is a selection of previous work that I've done myself as well as
        with some of my fellow classmates. There is also links to Github if you
        want to check out the code.
      </p>
      <ul className="card--containers">
        <li className="card--container-item">
          <Card className="card">
            <CardMedia>
              <img className="card--image" src={mapty_app} alt="Mapty image" />
            </CardMedia>
            <CardContent>
              <h1 className="card--title">Mapty app</h1>
              <p className="card--body">
                A workout application made with vanilla JavaScript and CSS
              </p>
            </CardContent>
            <Button
              className="card--button"
              href="https://github.com/magnussonfredrik/Mapty-app"
              target="_blank"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              <p className="button--text">View Source</p>
            </Button>
          </Card>
        </li>
        <li className="card--container-item">
          <Card className="card">
            <CardMedia>
              <img
                className="card--image"
                src={donut_shop}
                alt="Donut shop image"
              />
            </CardMedia>
            <CardContent>
              <h1 className="card--title">Donut shop</h1>
              <p className="card--body">
                A donut shop made in Angular.js with Material and NgRx
              </p>
            </CardContent>
            <Button
              className="card--button"
              href="https://github.com/magnussonfredrik/Donut-shop"
              target="_blank"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              <p className="button--text">View Source</p>
            </Button>
          </Card>
        </li>
        <li className="card--container-item">
          <Card className="card">
            <CardMedia>
              <img
                className="card--image"
                src={sonar_wars}
                alt="Sonar wars poster"
              />
            </CardMedia>
            <CardContent>
              <h1 className="card--title">Sonar wars</h1>
              <p className="card--body">
                An action-filled mobile game developed in Android Studio with
                Java
              </p>
            </CardContent>
            <Button
              className="card--button"
              href="https://github.com/magnussonfredrik/SonarWars"
              target="_blank"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              <p className="button--text">View Source</p>
            </Button>
          </Card>
        </li>
        <li className="card--container-item">
          <Card className="card">
            <CardMedia>
              <img
                className="card--image"
                src={portfolio_page}
                alt="Portfolio image"
              />
            </CardMedia>
            <CardContent>
              <h1 className="card--title">Portfolio page</h1>
              <p className="card--body">
                The page you're currently visiting is made with React.js and
                Material
              </p>
            </CardContent>
            <Button
              className="card--button"
              href="https://github.com/magnussonfredrik/Portfolio"
              target="_blank"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              <p className="button--text">View Source</p>
            </Button>
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
