import React from "react";
import { connect } from "react-redux";
import Homeworld from "./infoComponents/Homeworld";
import Vehicles from "./infoComponents/Vehicles";
import Films from "./infoComponents/Films";


class InfoPage extends React.Component {
  constructor(props) {
    super(props);
    const { data, match } = this.props;
    this.state = {
      obj:          data[match.params.id],
      fetchedRows:  ["homeworld", "vehicles", "films"],
      homeworld:    "",
      vehicles:     [],
      films:        [],
      propsFetched: false
    };
  }

  componentDidMount() {
    const { obj, propsFetched, fetchedRows } = this.state;
    const { history } = this.props;
    if (!obj) {
      history.push("/main");
      return;
    } if (propsFetched) {
      return;
    }

    const handleVehicle = ({ name, model }) => {
      this.setState(state => ({ vehicles: [...state.vehicles, { name, model }] }));
    };

    const handleFilm = ({ title }) => {
      this.setState(state => ({ films: [...state.films, title] }));
    };

    this.setState({ propsFetched: true });
    fetchedRows.forEach((value) => {
      switch (value) {
        case "homeworld":
          fetch(obj[value])
            .then(res => res.json())
            .then(objHome => this.setState({ homeworld: objHome.name }));
          break;
        case "vehicles":
          obj.vehicles.forEach((vehicleUrl) => {
            fetch(vehicleUrl)
              .then(res => res.json())
              .then(handleVehicle);
          });
          break;
        case "films":
          obj.films.forEach((filmUrl) => {
            fetch(filmUrl)
              .then(res => res.json())
              .then(handleFilm);
          });
          break;
        default:
          break;
      }
    });
  }

  enrollProperties = () => {
    const { fetchedRows, obj } = this.state;
    const forbiddenProps = ["created", "url", "edited", "species", "starships"]
      .concat(fetchedRows);
    return Object.keys(obj).map(propName => (
      !forbiddenProps.includes(propName)
        ? `${propName} = ${obj[propName]}`
        : ""
    ));
  };

  render() {
    const {
      obj,
      films,
      homeworld,
      vehicles
    } = this.state;
    const { history } = this.props;
    let propInfo = [];
    if (obj) {
      propInfo = this.enrollProperties().filter(el => el);
    }

    const objInfo = propInfo
      .map((val, i) => (<p key={i}>{val}</p>));

    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={history.goBack}
        >go back
        </button>
        {obj && objInfo}
        <Films films={films} />
        <Homeworld homeWorld={homeworld || "LOADING..."} />
        <Vehicles vehicles={vehicles} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

export default connect(mapStateToProps)(InfoPage);
