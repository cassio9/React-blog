import food from "../images/food.jpg";
import deco from "../images/deco.jpg";
import work from "../images/work.jpg";
import about from "../images/about.png";
import life from "../images/life.jpg";

function Home() {
  return (
    <div className="flex">
      <div className="left-flex">
        <main className="main-home">
          <img className="home-img" src={life} alt="" />
          <p className="date">July 23, 2019 | 3 comments</p>
          <h2 className="main-h2">Finding simplicity in life</h2>
          <p className="main-paragraph">
            <span className="span-strong">
              Life can get complicated really quickly
            </span>
            , but it doesn't have to be! There are many ways to simplify your
            life,
            <span className="span-link">
              {" "}
              a few of which we've explored in the past
            </span>
            . This week we're taking a bit of a approach though, in how you can
            find simplicity in the life you already living.
          </p>
          <p className="continue">continue reading</p>
        </main>
        <aside className="aside-home aside-flex">
          <img
            className="home-img flex-img food-img"
            src={food}
            alt="chinese food in a bowl with chopsticks"
          />
          <div className="details-container ">
            <div className="date-h2-container-home">
              <p className="date">July 23, 2019 | 3 comments</p>
              <h2 className="main-h2">Keeping cooking simple</h2>
            </div>
            <p className="main-paragraph">
              Food is a very important part of everyone's life. If you want to
              be healthy, you have to eat healthy. One of the easiest ways to do
              that is to keep your cooking nice and simple.
            </p>
            <p className="continue">continue reading</p>
          </div>
        </aside>
        <aside className="aside-home aside-flex">
          <img
            className="home-img flex-img work-img"
            src={work}
            alt="work desk and chair"
          />
          <div className="details-container ">
            <div className="date-h2-container-home">
              <p className="date">July 23, 2019 | 3 comments</p>
              <h2 className="main-h2">Simplicity and work</h2>
            </div>
            <p className="main-paragraph">
              Work is often a major source of stress. People get frustrated, it
              ruins their relationship with others and it leads to burnout. By
              keeping your work life as simple as possible, it will help balance
              everything out.
            </p>
            <p className="continue">continue reading</p>
          </div>
        </aside>
        <aside className="aside-home aside-flex">
          <img className="home-img flex-img deco-img" src={deco} alt="" />
          <div className="details-container ">
            <div className="date-h2-container-home">
              <p className="date">July 23, 2019 | 3 comments</p>
              <h2 className="main-h2">Simple decorations</h2>
            </div>
            <p className="main-paragraph">
              A home isn't a home until you've decorated a little. People either
              don't decorate, or they go overboard and it doesn't have the
              impact they were hoping for. Staying simple will help draw the eye
              where you want it to and make things pop like never before.
            </p>
            <p className="continue">continue reading</p>
          </div>
        </aside>
      </div>
      <div className="right-flex">
        <section className="home-recent-container">
          <div className="home-post-container">
            <h2 className="about-large-screen">about me</h2>
            <img src={about} alt="Food on the table" />
            <p>
              I find life better, and I'm happier, when things are nice and
              simple.
            </p>
          </div>
        </section>
        <section className="home-recent-container">
          <h2>RECENT POSTS</h2>
          <div className="posts-container">
            <img src={food} alt="Food on the table" />
            <p>Keeping cooking simple</p>
          </div>
          <div className="posts-container">
            <img className="work-img" src={work} alt="Work desk and table" />
            <p>Simplicity and work</p>
          </div>
          <div>
            <img className="deco-img" src={deco} alt="Flower vase" />
            <p>Simple decorations</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
