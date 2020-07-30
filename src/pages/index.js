import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Header from "../components/header"
import About from '../components/about'
import Tech from '../components/tech'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import ReactFullpage from '@fullpage/react-fullpage'

const SEL = 'section-container';
const SECTION_SEL = `.${SEL}`;


const pluginWrapper = () => {
  /*
  * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  */
};

// sectionsColor: ['#292929', '#43D398', '#EEB044', '#0F2C90',  '#9C9C9B'],


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ["main", "about", "technologies", "projects", "contact"]
    };
  }

  moveTo(slideIdx) {
    window.fullpage_api.moveTo(slideIdx);
  }

  moveSectionDown() {
    window.fullpage_api.moveSectionDown();
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <link href='https://fonts.googleapis.com/css2?family=Oswald&family=Bebas+Neue&family=Open+Sans&display=swap' rel='stylesheet' />
          <title>{this.props.data.site.siteMetadata.title}</title>
          <meta name="description" content={this.props.data.site.siteMetadata.description} />
        </Helmet>
        <Navigation moveTo={this.moveTo} pages={this.state.pages} />

        <ReactFullpage
          debug /* Debug logging */
          pluginWrapper={pluginWrapper} // Required when using extensions
          // fullpage options
          licenseKey={'YOUR_KEY_HERE'}
          navigation
          anchors={[...this.state.pages]}
          sectionSelector={SECTION_SEL}
          // sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              <div className={SEL}><Header /></div>
              <div className={SEL}><About /></div>
              <div className={SEL}><Tech /></div>
              <div className={SEL}><Projects /></div>
              <div className={SEL}><Contact /></div>

            </ReactFullpage.Wrapper>
          )}
        />
        <Footer/>

      </div>
    );
  }
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM YYYY")
            url
            github
            title
            thumbnail
            technologies
          }
        }
      }
    }
  }
`









/*
class IndexPage extends Component {

  constructor(props) {
    super(props)
    // toggle state in the index file will be updated if user scroll is detected
    this.state = {
      toggle: 0,
    }
    this.sections = ["Main", "About", "Technologies", "Project", "Contact"];
    const { edges } = this.props.data.allMarkdownRemark
    this.Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)
    this.toggle = this.toggle.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
    // _throttle is an utility function from lodash that creates a throttled function that only invokes func at most once per every wait milliseconds
    this.throttle = _throttle(this.handleNavigation, 3000)
    this.prev = 0;
  }






  render() {
    return (
      <div>
        <Helmet>
          <link href='https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Oswald&family=BenchNine&family=Abel&family=Bebas+Neue' rel='stylesheet' />
          <title>{this.props.data.site.siteMetadata.title}</title>
          <meta name="description" content={this.props.data.site.siteMetadata.description} />
        </Helmet>
        <Navigation toggle={this.toggle} sections={this.sections} />
        {this.state.toggle === 0 ?
          <Header /> : null}
        {this.state.toggle === 1 ?
          <About /> : null}
        {this.state.toggle === 2 ?
          <Tech /> : null}
        {this.state.toggle === 3 ?
          <Projects /> : null}
        {this.state.toggle === 4 ?
          <Contact /> : null}


      </div>
    )
  }
}


*/

  // {
  //   data: {
  //     site,
  //     allMarkdownRemark: { edges },
  //   },
  // }






        // {/*
      //   <div id="projects">
      //   <h2>Projects &darr;</h2>

      //   <div className="grids">
      //     {this.Posts}
      //   </div>
      // </div> */}

      // <Header />
      // <About />
      // <Tech />
      // <Projects />
      // <Contact />
      // <Footer />
      // componentDidMount() {
      //   // this listens to user scrolls and takes a callback function
      //   window.addEventListener('scroll', this.handleNavigation)
      // }

      // componentWillUnmount() {
      //   window.removeEventListener('scroll', this.handleNavigation)
      // }

      // toggle(num) {
      //   this.setState({ toggle: num })
      // }

      // handleNavigation(evt) {
      //   // toggle view on scroll
      //   console.log("this prev", this.prev, "scroll Y", window.scrollY, "diff", window.scrollY - this.prev, "state.toggle", this.state.toggle);

      //   if (window.scrollY - this.prev > 20 && this.state.toggle < 4) {
      //     console.log("******SCROLL DOWNNNNN*****")
      //     this.setState({ toggle: this.state.toggle + 1 })
      //     if(this.state.toggle !== 4) this.prev += 20;
      //   }
      //   if (this.prev - window.scrollY  > 20 && this.state.toggle > 0) {
      //     console.log("******SCROLL UP*****")
      //     this.setState({ toggle: this.state.toggle - 1 })

      //   }
