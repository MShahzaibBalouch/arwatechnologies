import arwa_logo from "./assets/images/arwa-logo.png";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style/Navbar.css";
import Cards from "./component/Cards";
import andriod from "./assets/images/resourses/android-app.svg";
import api from "./assets/images/resourses/api.svg";
import app from "./assets/images/resourses/app-upgradation.svg";
import blog from "./assets/images/resourses/blog.svg";
import cms from "./assets/images/resourses/cms.svg";
import ecommerce from "./assets/images/resourses/ecommerce.svg";
import erbicon from "./assets/images/resourses/erbiconM.svg";
import hire from "./assets/images/resourses/hire-python-developer.svg";
import integration from "./assets/images/resourses/integration-sol.svg";
import marketer from "./assets/images/resourses/Marketer.svg";
import marketing from "./assets/images/resourses/Marketing.svg";
import mobile from "./assets/images/resourses/mobile.svg";
import node from "./assets/images/resourses/node.svg";
import portfolio from "./assets/images/resourses/portfolio.svg";
import python from "./assets/images/resourses/python-application.svg";
import qa from "./assets/images/resourses/qa_icon.svg";
import team from "./assets/images/resourses/Team.svg";
import training from "./assets/images/resourses/training.svg";
import transformating from "./assets/images/resourses/transformation.svg";
import ui from "./assets/images/resourses/ui-ux.svg";

export default function NavigationBar() {
  const data = [
    {
      title: "Developers",
      data: [
        {
          name: "Ruby on Rails",
          image: app,
        },
        {
          name: "PHP",
          image: ecommerce,
        },
        {
          name: "Python",
          image: integration,
        },
        {
          name: "Java",
          image: python,
        },
        {
          name: "JavaScript",
          image: api,
        },
        {
          name: "Node.Js",
          image: node,
        },
        {
          name: ".Net",
          image: python,
        },
        {
          name: "WordPress",
          image: hire,
        },
      ],
    },
    {
      title: "Mobile Developer",
      data: [
        {
          name: "IOS",
          image: app,
        },
        {
          name: "Andriod",
          image: cms,
        },
      ],
    },
    {
      title: "Marketer",
      data: [
        {
          name: "Social Media Marketer",
          image: qa,
        },
        {
          name: "SEO Expert",
          image: ecommerce,
        },
        {
          name: "PPC Expert",
          image: blog,
        },
        {
          name: "Content Writing",
          image: ui,
        },
        {
          name: "Copywriting",
          image: integration,
        },
      ],
    },
    {
      title: "Data Sciences",
      data: [
        {
          name: "AI",
          image: app,
        },
        {
          name: "Blockchain",
          image: blog,
        },
      ],
    },
    {
      title: "Designer",
      data: [
        {
          name: "UI/UX",
          image: ui,
        },
        {
          name: "Ghraphic Designer",
          image: cms,
        },
      ],
    },
    {
      title: "Quality Assurance",
      data: [
        {
          name: "QA Engineer",
          image: qa,
        },
      ],
    },
    {
      title: "Business Application",
      data: [
        {
          name: "ERP",
          image: erbicon,
        },
      ],
    },
  ];
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-gray-100">
      <Container>
        <Navbar.Brand href="/">
          <NavLink to="/">
            <img className="h-20 w-auto" src={arwa_logo} alt="Your Company" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="Hire Talent"
              className="text-black rounded-md px-3 py-2 text-sm font-bold"
              id="collapsible-nav-dropdown"
            >
              <div className="row">
                {
                data.map((item, index) => {
                  const myFunction = () => {
                    return (
                      <div className="col-md-3">
                        <h2 className="text-blue-400 fw-bolder">
                          {item.title}
                        </h2>
                        <NavDropdown.Item className="m-0 p-0">
                          <Cards data={item.data} />
                        </NavDropdown.Item>
                      </div>
                    );
                  };
                  return index === 0 ||
                    index === 1 ||
                    index === 3 ||
                    index === 6
                    ? myFunction()
                    : "";
                })
                }
              </div>
            </NavDropdown>
            <NavDropdown
              title="Company"
              className="text-black rounded-md px-3 py-2 text-sm font-bold"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavLink
              eventKey={2}
              className="text-gray-50 bg-gray-900 hover:text-black hover:bg-white hover:border-gray-900 border border-gray-900 rounded-4  px-5 py-3 text-sm font-medium ml-3 transition-all duration-300 ease-in-out"
              href="/contact-us"
            >
              Hire a Pro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
